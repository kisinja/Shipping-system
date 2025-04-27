import { socket } from "@/lib/socket";
import { prismaClient } from "@/utils";
import { NextResponse } from 'next/server';

type ParamsProps = Promise<{
    id: string;
}>

export async function GET(
    request: Request,
    { params }: { params: ParamsProps }
) {
    try {
        const shipmentId = (await params).id;
        const shipment = await prismaClient.shipment.findUnique({
            where: { id: shipmentId },
            include: {
                container: {
                    include: {
                        goods: true
                    }
                },
                logs: {
                    orderBy: {
                        timestamp: 'desc'
                    },
                    take: 20
                },
                documents: true,
                gpsUpdates: {
                    orderBy: {
                        timestamp: 'desc'
                    },
                    take: 1
                }
            }
        });

        if (!shipment) {
            return NextResponse.json(
                { error: 'Shipment not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ shipment, success: true }, { status: 200 });
    } catch (error) {
        console.error('[SHIPMENT_GET_ERROR]', error);
        return NextResponse.json(
            { error: 'Failed to fetch shipment', success: false },
            { status: 500 },
        );
    }
};

// Update shipment latitude and longitude
export async function POST(
    req: Request,
    { params }: { params: ParamsProps }
) {
    const id = (await params).id;
    try {
        const { latitude, longitude, speed, heading } = await req.json();

        if (
            typeof latitude !== 'number' ||
            typeof longitude !== 'number' ||
            Math.abs(latitude) > 90 ||
            Math.abs(longitude) > 180
        ) {
            return NextResponse.json(
                { error: 'Invalid coordinates' },
                { status: 400 }
            );
        }

        const result = await prismaClient.$transaction([
            prismaClient.shipment.update({
                where: { id: id },
                data: {
                    currentLatitude: latitude,
                    currentLongitude: longitude,
                    updatedAt: new Date()
                }
            }),
            prismaClient.gpsUpdate.create({
                data: {
                    shipmentId: id,
                    latitude,
                    longitude,
                    speed,
                    heading
                }
            }),
            prismaClient.log.create({
                data: {
                    shipmentId: id,
                    message: `Position updated to (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`,
                    location: 'GPS_UPDATE',
                    status: 'IN_TRANSIT'
                }
            })
        ]);

        socket.emit('position-update', {
            shipmentId: id,
            latitude,
            longitude,
            speed,
            heading
        });

        return NextResponse.json({
            success: true,
            shipment: result[0],
            gpsUpdate: result[1]
        });
    } catch (error) {
        console.error('[SHIPMENT_UPDATE_ERROR]', error);
        return NextResponse.json(
            { error: 'Failed to update shipment', success: false },
            { status: 500 }
        );
    }
};
