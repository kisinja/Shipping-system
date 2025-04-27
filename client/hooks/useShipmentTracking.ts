"use client";

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type PositionUpdate = {
    position: [number, number];
    speed?: number;
    heading?: number;
    timestamp: string;
};

export function useShipmentTracking(shipmentId: string) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [shipment, setShipment] = useState<any>(null);
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [history, setHistory] = useState<[number, number][]>([]);
    const [stats, setStats] = useState({
        speed: shipment?.speed || '--',
        heading: shipment?.heading || '--',
        lastUpdate: '--',
    });
    console.log(position, history, stats);

    // Fetch initial data from the server
    useEffect(() => {
        const fetchShipment = async () => {
            const res = await fetch(`/api/shipments/${shipmentId}`);
            if (!res.ok) {
                console.error('Failed to fetch shipment data');
                return;
            }
            const data = await res.json();
            setShipment(data.shipment);
        };

        fetchShipment();
    }, [shipmentId]);

    useEffect(() => {
        const socketInstance = io('http://localhost:3002', {
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
        });

        socketInstance.on('connect', () => {
            console.log('Connected to WebSocket server');
            socketInstance.emit('join-shipment', shipmentId);
        });

        socketInstance.on('position-updated', (data: PositionUpdate) => {
            setPosition(data.position);
            setHistory(prev => [...prev, data.position]);

            setStats({
                speed: data.speed ? `${data.speed.toFixed(1)} knots` : '--',
                heading: data.heading ? getCardinalDirection(data.heading) : '--',
                lastUpdate: formatTimeAgo(data.timestamp)
            });
        });

        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect();
        };
    }, [shipmentId]);

    return { position, history, stats };
}

// Helper functions
function getCardinalDirection(degrees: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return `${directions[index]} (${Math.round(degrees)}°)`;
}

function formatTimeAgo(timestamp: string): string {
    const now = new Date();
    const updated = new Date(timestamp);
    const seconds = Math.floor((now.getTime() - updated.getTime()) / 1000);

    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
}