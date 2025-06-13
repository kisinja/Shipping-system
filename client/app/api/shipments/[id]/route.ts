import { prismaClient } from "@/utils";
import { NextResponse } from "next/server";

type ParamsProps = Promise<{
  id: string;
}>;

// Update shipment latitude and longitude
export async function POST(req: Request, { params }: { params: ParamsProps }) {
  const id = (await params).id;
  const body = await req.json();
  try {
    const updatedShipment = await prismaClient.shipment.update({
      where: { id },
      data: {
        currentPort: body.currentPort,
        status: body.status,
        departureDate: new Date(body.departureDate),
        estimatedArrival: new Date(body.estimatedArrival),
      },
    });

    return NextResponse.json({ data: updatedShipment });
  } catch (error) {
    console.error("[SHIPMENT_UPDATE_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to update shipment", success: false },
      { status: 500 }
    );
  }
}
