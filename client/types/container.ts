export interface Container {
    id: string;
    containerId: string;
    type: string;
    size: string;
    currentPort: string;
    status: string;
    goods: Goods[]; // Array of goods in the container
    // Add any other fields you need
}

export interface Goods{
    id: string;
    name: string;
    quantity: number;
    weight: number;
    // Add any other fields you need
}

export type ContainerStatus = 'AVAILABLE' | 'BOOKED' | 'IN_TRANSIT' | 'AT_PORT' | 'MAINTENANCE';