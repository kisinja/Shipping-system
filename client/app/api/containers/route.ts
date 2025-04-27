import { NextResponse } from "next/server";
import { prismaClient } from "@/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const POST = async (req: Request) => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    try {
        // eslint-disable-next-line prefer-const
        //let emptyFields: string[] = [];
        const body = await req.json();
        console.log("Request body:", body);
        const { containerId, size, type, location, currentPort } = body;



        // Check for empty fields and add them to the array
        /* if (!containerId) emptyFields.push("containerId");
        if (!size) emptyFields.push("size");
        if (!containerType) emptyFields.push("containerType");
        if (!location) emptyFields.push("location");
        if (!currentPort) emptyFields.push("currentPort");

        if (emptyFields.length > 0) {
            return NextResponse.json(
                {
                    message: "Missing required fields",
                    emptyFields
                },
                { status: 400 }
            );
        } */

        // Check if containerId already exists
        const existingContainer = await prismaClient.container.findUnique({
            where: { containerId },
        });
        if (existingContainer) {
            return NextResponse.json({ message: "Container ID already exists" }, { status: 400 });
        }

        // Create a new container
        const newContainer = await prismaClient.container.create({
            data: {
                containerId,
                size,
                containerType: type,
                location,
                currentPort,
                userId: user?.id,
            }
        });

        return NextResponse.json({ message: "Container created successfully", container: newContainer }, { status: 201 });
    } catch (error) {
        console.error('Error creating container:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
};