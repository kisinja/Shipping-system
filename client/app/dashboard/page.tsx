"use client";

import React, { useEffect, useState } from 'react';
import { getUserDashboardData } from './actions';
import { ContainerIcon, ShipWheelIcon, CalendarIcon, MapPinIcon, PackageIcon, LoadingSpinner } from '@/components/Icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ContainerCard from '@/components/ContainerCard';

// Define types
type ContainerStatus = 'AVAILABLE' | 'BOOKED' | 'IN_TRANSIT' | 'AT_PORT' | 'MAINTENANCE';
type ShipmentStatus = 'PENDING' | 'IN_TRANSIT' | 'COMPLETED' | 'CANCELLED';

interface Container {
    id: string;
    containerId: string;
    type: string;
    size: string;
    currentPort: string;
    status: ContainerStatus;
    createdAt: string;
    shipmentId?: string;
}

interface Shipment {
    id: string;
    shipmentCode: string;
    origin: string;
    destination: string;
    status: ShipmentStatus;
    createdAt: string;
    container?: {
        containerId: string;
        type: string;
        size: string;
    };
}

const Dashboard = () => {
    const [containers, setContainers] = useState<Container[]>([]);
    console.log(containers);
    const [shipments, setShipments] = useState<Shipment[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getUserDashboardData();
                if (res) {
                    setContainers(res.containers);
                    setShipments(res.shipments);
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // Enhanced color palette
    const colors = {
        primary: 'bg-gradient-to-r from-cyan-600 to-blue-700',
        secondary: 'bg-teal-100',
        accent: 'bg-amber-500',
        success: 'bg-emerald-500',
        error: 'bg-rose-500',
        warning: 'bg-amber-400',
        info: 'bg-indigo-500',
        text: 'text-slate-800',
        lightText: 'text-slate-100',
        mutedText: 'text-slate-500',
        cardBg: 'bg-white',
        border: 'border-slate-200'
    };

    const statusColors = {
        AVAILABLE: colors.success,
        BOOKED: colors.primary,
        IN_TRANSIT: colors.info,
        AT_PORT: colors.warning,
        MAINTENANCE: colors.mutedText,
        PENDING: 'bg-purple-500',
        COMPLETED: colors.success,
        CANCELLED: colors.error
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    };

    const handleAddGoods = (container: Container) => {
        if (!container.shipmentId) {
            alert('This container is not yet assigned to a shipment');
            return;
        }
        router.push(`/dashboard/goods/add?containerId=${container.id}&shipmentId=${container.shipmentId}`);
    };

    return (
        <div className="p-6 md:p-10 lg:p-12 min-h-screen">
            {/* Dashboard Header */}
            <div className="mb-12 text-center md:text-left py-4 px-8 rounded-2xl bg-blue-50 shadow-lg w-max">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2 bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                    Shipping Dashboard
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl">
                    Track your containers and shipments in real-time
                </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className={`p-6 rounded-xl shadow-md ${colors.primary} text-white`}>
                    <div className="flex items-center">
                        <ContainerIcon className="w-8 h-8 mr-3" />
                        <h3 className="text-xl font-semibold">Total Containers</h3>
                    </div>
                    <p className="text-3xl font-bold mt-2">{containers.length}</p>
                </div>

                <div className={`p-6 rounded-xl shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white`}>
                    <div className="flex items-center">
                        <PackageIcon className="w-8 h-8 mr-3" />
                        <h3 className="text-xl font-semibold">Active Shipments</h3>
                    </div>
                    <p className="text-3xl font-bold mt-2">
                        {shipments.filter(s => s.status === 'IN_TRANSIT').length}
                    </p>
                </div>

                <div className={`p-6 rounded-xl shadow-md ${colors.success} text-white`}>
                    <div className="flex items-center">
                        <CalendarIcon className="w-8 h-8 mr-3" />
                        <h3 className="text-xl font-semibold">Completed</h3>
                    </div>
                    <p className="text-3xl font-bold mt-2">
                        {shipments.filter(s => s.status === 'COMPLETED').length}
                    </p>
                </div>
            </div>

            {/* Containers Section */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                        <ContainerIcon className="w-6 h-6 mr-2 text-cyan-600" />
                        My Containers
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.secondary} ${colors.text}`}>
                        {containers.length} items
                    </span>
                </div>

                {containers.length === 0 ? (
                    <div className={`p-8 rounded-xl ${colors.cardBg} shadow-sm border ${colors.border} text-center`}>
                        <ContainerIcon className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                        <h3 className="text-lg font-medium text-slate-700 mb-1">No containers booked yet</h3>
                        <p className="text-slate-500">Get started by booking your first container</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {containers.map((container) => (
                            <ContainerCard key={container.id} container={container} />
                        ))}
                    </div>
                )}
            </section>

            {/* Shipments Section */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                        <PackageIcon className="w-6 h-6 mr-2 text-indigo-600" />
                        My Shipments
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800`}>
                        {shipments.length} items
                    </span>
                </div>

                {shipments.length === 0 ? (
                    <div className={`p-8 rounded-xl ${colors.cardBg} shadow-sm border ${colors.border} text-center`}>
                        <PackageIcon className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                        <h3 className="text-lg font-medium text-slate-700 mb-1">No shipments found</h3>
                        <p className="text-slate-500">Your shipment history will appear here</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {shipments.map((shipment) => (
                            <div
                                key={shipment.id}
                                className={`relative overflow-hidden rounded-xl shadow-lg ${colors.cardBg} border ${colors.border} transition-all duration-300 hover:shadow-xl`}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 flex items-center">
                                                <span className={`w-3 h-3 rounded-full mr-2 ${statusColors[shipment.status]
                                                    }`}></span>
                                                {shipment.shipmentCode}
                                            </h3>
                                            <p className="text-sm text-slate-500">
                                                {shipment.status.replace('_', ' ')}
                                            </p>
                                        </div>
                                        <span className={`px-2 py-1 text-xs font-medium rounded ${shipment.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' :
                                            shipment.status === 'IN_TRANSIT' ? 'bg-indigo-100 text-indigo-800' :
                                                'bg-amber-100 text-amber-800'
                                            }`}>
                                            {shipment.status}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-sm text-slate-500">Origin</p>
                                            <p className="font-medium text-slate-700">{shipment.origin}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Destination</p>
                                            <p className="font-medium text-slate-700">{shipment.destination}</p>
                                        </div>
                                    </div>

                                    {shipment.container && (
                                        <div className={`mt-4 pt-4 border-t ${colors.border}`}>
                                            <h4 className="text-sm font-semibold text-slate-600 mb-2">Container Details</h4>
                                            <div className="flex items-center space-x-4">
                                                <div className={`p-2 rounded-lg ${colors.secondary}`}>
                                                    <ContainerIcon className="w-5 h-5 text-cyan-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-700">
                                                        {shipment.container.containerId}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {shipment.container.size} • {shipment.container.type}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className={`mt-4 pt-4 border-t ${colors.border} flex justify-between items-center`}>
                                        <div className="text-sm text-slate-500">
                                            Created: {new Date(shipment.createdAt).toLocaleDateString()}
                                        </div>
                                        <Link href={`/dashboard/tracking/${shipment.id}`}>
                                            <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                                                Track Shipment
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Dashboard;