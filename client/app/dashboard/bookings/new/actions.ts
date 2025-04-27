"use server";

import { prismaClient } from "@/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export const bookContainer = async (containerId: string) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    try {
        const container = await prismaClient.container.findUnique({
            where: { id: containerId },
        });
        if (!container) {
            throw new Error('Container not found');
        }
        if (container.status !== 'AVAILABLE') {
            throw new Error('Container is no longer available');
        }

        // Book the container first
        const bookedContainer = await prismaClient.container.update({
            where: { id: containerId },
            data: {
                status: 'BOOKED',
                userId: user?.id,
                bookingDate: new Date(),
            }
        });

        // Create a new shipment for the booked container
        const newShipment = await prismaClient.shipment.create({
            data: {
                shipmentCode: `SH-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                origin: bookedContainer.currentPort,
                destination: 'TBD',
                currentPort: bookedContainer.currentPort,
                containerId: bookedContainer.id,
                userId: user?.id as string,
                status: 'PENDING',
            },
        });

        // Update the container with the shipmentId
        await prismaClient.container.update({
            where: { id: containerId },
            data: {
                shipmentId: newShipment.id
            }
        });

        revalidatePath('/dashboard/containers');
        revalidatePath('/dashboard');

        return {
            success: true,
            message: 'Container successfully booked!',
            shipmentId: newShipment.id
        };
    } catch (error) {
        console.error('Error booking container:', error);
        return { success: false, message: 'Error booking container', error };
    }
};