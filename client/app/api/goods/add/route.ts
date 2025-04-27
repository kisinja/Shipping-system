import { prismaClient } from "@/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const body = await req.json();
        console.log(body);
        const { description, quantity, weight, value, containerId, shipmentId } = body;

        if (!description || !quantity || !weight || !value || !containerId || !shipmentId) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        const goods = await prismaClient.goods.create({
            data: {
                description,
                quantity,
                weight,
                value,
                containerId,
                shipmentId,
            }
        });

        return NextResponse.json({ success: true, goods }, { status: 201 });
    } catch (error) {
        console.error('Error adding goods:', error);
        return NextResponse.json({ success: false, message: 'Failed to add goods' }, { status: 500 });
    }
};