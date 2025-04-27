import { prismaClient } from "@/utils";
import { NextResponse } from "next/server";
import { ShipmentStatus } from "@prisma/client";

type Params = Promise<{
    id: string;
}>;

export async function GET(req: Request, { params }: { params: Params }) {
    const containerId = (await params).id;

    try {
        // First check if container exists and has goods
        const container = await prismaClient.container.findUnique({
            where: { id: containerId },
            include: {
                goods: true,
                shipment: true
            }
        });

        if (!container) {
            return NextResponse.json(
                { success: false, message: 'Container not found' },
                { status: 404 }
            );
        }

        if (container.goods.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Cannot mark container ready - it must contain at least one item'
                },
                { status: 400 }
            );
        }

        // Use transaction for atomic updates
        const [updatedContainer, updatedShipment] = await prismaClient.$transaction([
            prismaClient.container.update({
                where: { id: containerId },
                data: {
                    status: "READY_FOR_SHIPMENT",
                    updatedAt: new Date()
                },
                include: {
                    shipment: true
                }
            }),
            prismaClient.shipment.update({
                where: { containerId: containerId },
                data: {
                    status: ShipmentStatus.IN_TRANSIT,
                    departureDate: new Date(),
                    updatedAt: new Date()
                }
            })
        ]);

        // Create a log entry for this status change
        await prismaClient.log.create({
            data: {
                shipmentId: updatedShipment.id,
                message: `Container marked ready for shipment with ${container.goods.length} items`,
                status: ShipmentStatus.IN_TRANSIT,
                location: container.currentPort
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Container and shipment status updated successfully',
            data: {
                container: updatedContainer,
                shipment: updatedShipment
            }
        });

    } catch (error) {
        console.error('[CONFIRM_READY_ERROR]', error);
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : 'Internal server error'
            },
            { status: 500 }
        );
    }
}