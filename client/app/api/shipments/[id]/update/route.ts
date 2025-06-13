import { NextRequest, NextResponse } from 'next/server';
import { prismaClient } from '@/utils';

type ParamsProps = Promise<{
    id: string;
}>;

export async function POST(req: NextRequest, { params }: { params: ParamsProps }) {
    try {
        const shipmentId = (await params).id;
        const body = await req.json();
        const { departureDate, currentPort, estimatedArrival } = body;

        const updatedShipment = await prismaClient.shipment.update({
            where: { id: shipmentId },
            data: {
                ...(departureDate && { departureDate: new Date(departureDate) }),
                ...(currentPort && { currentPort }),
                ...(estimatedArrival && { estimatedArrival: new Date(estimatedArrival) }),
            },
        });
        return NextResponse.json({ success: true, data: updatedShipment });
    } catch (error) {
        console.error('Error updating shipment:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}