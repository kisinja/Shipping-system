import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@/utils";

export async function POST(req: NextRequest) {
  

  try {
    const body = await req.json();
    const { containerId, size, type, currentPort, status } = body;

    // Validation
    if (!containerId || !size || !type || !currentPort) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    const newContainer = await prismaClient.container.create({
      data: {
        containerId,
        size,
        type,
        currentPort,
        status, // Optional: defaults to 'AVAILABLE'
      },
    });

    return NextResponse.json(
      { success: true, container: newContainer },
      { status: 201 }
    );
  } catch (error) {
    console.error("[CREATE_CONTAINER_ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Failed to create container." },
      { status: 500 }
    );
  }
}
