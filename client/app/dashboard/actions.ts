"use server";

import { prismaClient } from "@/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUserDashboardData = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    try {
        const containers = await prismaClient.container.findMany({
            where: { userId: user?.id },
            orderBy: { createdAt: 'desc' },
            include: { goods: true },
        });

        const shipments = await prismaClient.shipment.findMany({
            where: { userId: user?.id },
            orderBy: { createdAt: 'desc' },
            include: {
                container: {
                    select: {
                        containerId: true,
                        type: true,
                        size: true
                    }
                }
            }
        });

        return {
            containers,
            shipments: shipments.map(shipment => ({
                ...shipment,
                container: shipment.container ? {
                    containerId: shipment.container.containerId,
                    type: shipment.container.type,
                    size: shipment.container.size
                } : undefined
            }))
        };
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return { containers: [], shipments: [] };
    }
};