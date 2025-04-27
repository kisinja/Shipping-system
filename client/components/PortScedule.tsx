// components/PortSchedule.tsx
'use client';

import { MapPin, Clock, Ship } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface PortCall {
    id: string;
    portCode: string;
    portName: string;
    arrival: Date;
    departure: Date;
    status: 'PENDING' | 'ARRIVED' | 'DEPARTED';
}

export function PortSchedule({ shipment }: { shipment: any }) {
    const [ports, setPorts] = useState<PortCall[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPortSchedule = async () => {
            try {
                // In a real app, you might fetch from /api/shipments/:id/ports
                const mockPorts: PortCall[] = [
                    {
                        id: '1',
                        portCode: shipment.origin,
                        portName: `${shipment.origin} Port`,
                        arrival: new Date(shipment.departureDate || new Date()),
                        departure: new Date(
                            new Date(shipment.departureDate || new Date()).getTime() + 86400000
                        ),
                        status: 'DEPARTED'
                    },
                    {
                        id: '2',
                        portCode: 'CNNGB',
                        portName: 'Shanghai Port',
                        arrival: new Date(Date.now() + 86400000 * 2),
                        departure: new Date(Date.now() + 86400000 * 3),
                        status: 'PENDING'
                    },
                    {
                        id: '3',
                        portCode: shipment.destination,
                        portName: `${shipment.destination} Port`,
                        arrival: new Date(shipment.estimatedArrival || Date.now() + 86400000 * 5),
                        departure: new Date(
                            new Date(shipment.estimatedArrival || Date.now() + 86400000 * 5).getTime() + 86400000
                        ),
                        status: 'PENDING'
                    }
                ];
                setPorts(mockPorts);
            } catch (error) {
                console.error('Failed to fetch port schedule', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPortSchedule();
    }, [shipment]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ARRIVED':
                return 'bg-green-100 text-green-800';
            case 'DEPARTED':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="border rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <MapPin className="w-5 h-5 text-amber-500" />
                Port Schedule
            </h3>

            {isLoading ? (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
                </div>
            ) : (
                <div className="space-y-4">
                    {ports.map((port) => (
                        <div key={port.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-medium flex items-center gap-2">
                                        <Ship className="w-4 h-4 text-amber-600" />
                                        {port.portName}
                                    </h4>
                                    <p className="text-sm text-gray-500">{port.portCode}</p>
                                </div>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${getStatusColor(port.status)}`}
                                >
                                    {port.status}
                                </span>
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <div>
                                        <p className="text-gray-500">Arrival</p>
                                        <p>{port.arrival.toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <div>
                                        <p className="text-gray-500">Departure</p>
                                        <p>{port.departure.toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}