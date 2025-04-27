import { prismaClient } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const containers = await prismaClient.container.findMany({
            where: { status: 'AVAILABLE' },
            orderBy: { bookingDate: 'asc' }
        });

        if (!containers || containers.length === 0) {
            return NextResponse.json({ message: 'No available containers' }, { status: 400 });
        }
        console.log(containers);

        return NextResponse.json(containers, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch containers' }, { status: 500 });
    }
}