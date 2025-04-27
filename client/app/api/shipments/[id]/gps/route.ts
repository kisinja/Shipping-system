import { prismaClient } from "@/utils";
import { NextResponse } from "next/server";

type ParamsProps = Promise<{
    id: string;
}>;

export async function POST(
    req: Request,
    { params }: { params: ParamsProps }
) {
    const id = (await params).id;

    const { latitude, longitude, speed, heading } = await req.json();

    try {
        const update = await prismaClient.$transaction([
            prismaClient.shipment.update({
                where: { id },
                data: {
                    currentLatitude: latitude,
                    currentLongitude: longitude,
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
                    message: `Location updated (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`,
                    location: 'GPS_UPDATE',
                }
            })
        ]);

        return NextResponse.json({ update, success: true }, { status: 200 });
    } catch (error) {
        console.error('Error updating GPS data:', error);
        return NextResponse.json(
            { success: false, message: 'Error updating GPS data' },
            { status: 500 }
        );
    }
};

export async function GET(
    req: Request,
    { params }: { params: ParamsProps }
) {
    const id = (await params).id;

    try {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - 30);

        const gpsData = await prismaClient.gpsUpdate.findMany({
            where: { shipmentId: id },
            orderBy: { timestamp: 'desc' },
            take: 100, // Limit to the last 100 records
        });

        // Calculate distance between points (optional)
        const historyWithDistance = gpsData.map((point, index) => ({
            ...point,
            distance: index > 0 ? calculateDistance(
                point.latitude,
                point.longitude,
                gpsData[index - 1].latitude,
                gpsData[index - 1].longitude
            ) : 0
        }));

        return NextResponse.json(historyWithDistance, { status: 200 });
    } catch (error) {
        console.error('Error fetching GPS data:', error);
        return NextResponse.json(
            { success: false, message: 'Error fetching GPS data' },
            { status: 500 }
        );
    }
};

// Helper function to calculate distance between coordinates (Haversine formula)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}