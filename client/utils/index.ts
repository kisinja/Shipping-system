import { PrismaClient } from "@/prisma/generated";

const prismaClient = new PrismaClient();

export { prismaClient };

/* Dummy data for features */
export const features = [
    {
        id: 1,
        title: "Live Tracking",
        desc: "Real-time container location updates."
    },
    {
        id: 2,
        title: "Central Dashboard",
        desc: "Manage all your shipments from one place."
    },
    {
        id: 3,
        title: "Secure Bookings",
        desc: "Easy, secure container reservations."
    },
    {
        id: 4,
        title: "Custom Alerts",
        desc: "Stay notified on every movement."
    },
];

export const steps = [
    { step: "1", label: "Create Account" },
    { step: "2", label: "Book a Container" },
    { step: "3", label: "Track Your Shipment" },
    { step: "4", label: "Manage Deliveries" },
];

export const generateContainerId = () => {
    const prefix = 'SVS';
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${prefix}-${randomPart}-${datePart}`;
}

/* const shipments = await prismaClient.shipment.findMany({
        include:{
            container:true,
        },
        orderBy:{
            createdAt: 'desc',
        }
    }); */