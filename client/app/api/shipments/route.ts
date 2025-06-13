import { prismaClient } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const shipments = await prismaClient.shipment.findMany({
      include: { container: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ shipments });
  } catch (error) {
    console.error("[SHIPMENT_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to fetch shipments" },
      { status: 500 }
    );
  }
}
