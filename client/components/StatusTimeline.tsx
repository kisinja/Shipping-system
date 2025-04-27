// components/StatusTimeline.tsx
'use client';

import { Clock, MapPin, Package, Ship } from 'lucide-react';
import { Log } from '@prisma/client';

const iconMap = {
    DEPARTURE: <Ship className="w-4 h-4" />,
    ARRIVAL: <MapPin className="w-4 h-4" />,
    CUSTOMS: <Package className="w-4 h-4" />,
    DEFAULT: <Clock className="w-4 h-4" />
};

const statusColors = {
    IN_TRANSIT: 'bg-blue-100 text-blue-800',
    AT_PORT: 'bg-amber-100 text-amber-800',
    CUSTOMS_HOLD: 'bg-red-100 text-red-800',
    DELIVERED: 'bg-green-100 text-green-800'
};

export function StatusTimeline({ logs }: { logs: Log[] }) {
    return (
        <div className="border rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Clock className="w-5 h-5 text-gray-500" />
                Shipment Timeline
            </h3>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />

                <div className="space-y-6">
                    {logs.length > 0 ? (
                        logs.map((log, index) => (
                            <div key={log.id} className="relative pl-8">
                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-1 w-4 h-4 rounded-full flex items-center justify-center ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}>
                                    {index === 0 && (
                                        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping" />
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        {iconMap[log.status as keyof typeof iconMap] || iconMap.DEFAULT}
                                        <span className="font-medium">{log.message}</span>
                                        {log.status && (
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[log.status as keyof typeof statusColors] || 'bg-gray-100'
                                                }`}>
                                                {log.status.replace('_', ' ')}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {new Date(log.timestamp).toLocaleString()}
                                    </p>
                                    {log.location && (
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {log.location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-4 text-gray-500">
                            No tracking updates yet
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}