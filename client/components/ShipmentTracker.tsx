// components/ShipmentTracker.tsx
'use client';

import { useEffect, useState } from 'react';
import { Clock, Compass, Loader2, MapPin, Navigation, Ship } from 'lucide-react';
import dynamic from 'next/dynamic';
import { buttonVariants } from './ui/button';
import { useShipmentTracking } from '@/hooks/useShipmentTracking';
import { io, Socket } from 'socket.io-client';

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
});

export function ShipmentTracker({ shipmentId }: { shipmentId: string }) {
    const { position, history, setPosition, setHistory, stats, setStats } = useShipmentTracking(shipmentId);
    const [isLoading, setIsLoading] = useState(true);
    const [socketInstance, setSocketInstance] = useState<Socket | null>(null);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const res = await fetch(`/api/shipments/${shipmentId}`);
                if (!res.ok) throw new Error('Failed to fetch shipment data');
                const data = await res.json();

                if (data.shipment?.currentLatitude && data.shipment?.currentLongitude) {
                    setPosition({
                        latitude: data.shipment.currentLatitude,
                        longitude: data.shipment.currentLongitude,
                    });
                    setHistory(data.shipment.gpsUpdates || []);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading initial shipment data:', error);
                setIsLoading(false);
            }
        };

        fetchInitialData();
    }, [shipmentId, setPosition, setHistory]);

    useEffect(() => {
        const socket = io('http://localhost:3002');
        setSocketInstance(socket);

        socket.emit('join-shipment', shipmentId); // Join the shipment room

        // Listen for real-time position updates from the server
        socket.on('position-update', (data: any) => {
            console.log('Received position update:', data);

            const { latitude, longitude, speed, heading, timestamp } = data;

            setPosition({ latitude, longitude });

            setHistory(prevHistory => [
                {
                    latitude,
                    longitude,
                    speed,
                    heading,
                    timestamp
                },
                ...prevHistory.slice(0, 19) // keep only latest 20 updates
            ]);

            setStats({
                speed: speed ? `${speed.toFixed(1)} knots` : 'N/A',
                heading: heading ? `${heading.toFixed(0)}°` : 'N/A',
                lastUpdate: timestamp ? new Date(timestamp).toLocaleTimeString() : 'N/A'
            });
        });

        // Simulate position updates every 5 seconds (FOR TESTING ONLY)
        const interval = setInterval(() => {
            socket.emit('position-update', {
                shipmentId,
                latitude: 37.7749 + Math.random() * 0.01,
                longitude: -122.4194 + Math.random() * 0.01,
                speed: Math.random() * 20,
                heading: Math.random() * 360
            });
        }, 5000);

        return () => {
            clearInterval(interval);
            socket.disconnect();
        };
    }, [shipmentId, setPosition, setHistory, setStats]);

    if (isLoading && !position) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-bold">
                    <Navigation className="w-5 h-5 text-blue-500" />
                    Live Tracking
                </h3>
                <div className="flex gap-2">
                    <button className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                        <MapPin className="w-4 h-4 mr-2" />
                        View Ports
                    </button>
                </div>
            </div>

            <div className="rounded-lg overflow-hidden border">
                <Map
                    currentPosition={position}
                    path={history}
                    zoom={position ? 6 : 2}
                />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <TrackerStat
                    icon={<Ship className="w-5 h-5" />}
                    label="Current Speed"
                    value={stats.speed}
                />
                <TrackerStat
                    icon={<Compass className="w-5 h-5" />}
                    label="Heading"
                    value={stats.heading}
                />
                <TrackerStat
                    icon={<Clock className="w-5 h-5" />}
                    label="Last Update"
                    value={stats.lastUpdate}
                />
            </div>
        </div>
    );
}

function TrackerStat({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="border rounded-lg p-3">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gray-100">{icon}</div>
                <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="font-medium">{value}</p>
                </div>
            </div>
        </div>
    );
}
