"use client";

import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { ContainersGrid } from '@/components/ContainersGrid';
import { ContainerIcon } from '@/components/Icons';
import ContainerCardSkeleton from '@/components/ContainerCard';
import { Container } from '@/types/container';

const NewBookings = () => {
    const [containers, setContainers] = useState<Container[]>([]);
    const [loading, setLoading] = useState<string | null>(null);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchContainers() {
            try {
                const res = await axios.get<Container[]>('/api/containers/available');
                if (res.status === 400) {
                    setContainers([]);
                    setMessage({ text: 'No available containers', type: 'error' });
                }
                setContainers(res.data);
            } catch (error) {
                setMessage({ text: 'Failed to load containers', type: 'error' });
                setContainers([]);
                setTimeout(() => setMessage(null), 3000);
                console.error('Error fetching containers:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchContainers();
    }, []);

    const handleContainerRemove = (containerId: string) => {
        setContainers(prev => prev.filter(container => container.id !== containerId));
    };

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Available Containers
                </h1>
                <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                    Select from our premium shipping containers ready for immediate booking
                </p>
            </div>

            {/* Status Message */}
            {message && (
                <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-xl ${message.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
                    } text-white animate-fade-in`}>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {message.type === 'success' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            )}
                        </svg>
                        {message.text}
                    </div>
                </div>
            )}

            {/* Container Grid with Suspense */}
            <Suspense fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {[...Array(8)].map((_, i) => (
                        <ContainerCardSkeleton key={i} />
                    ))}
                </div>
            }>
                <ContainersGrid
                    containers={containers}
                    loading={loading}
                    onBookingSuccess={handleContainerRemove}
                    setLoading={setLoading}
                    setMessage={setMessage}
                />
            </Suspense>

            {/* Empty State */}
            {!isLoading && containers.length === 0 && (
                <div className="text-center py-16">
                    <div className="mx-auto h-24 w-24 text-slate-300 mb-4">
                        <ContainerIcon className="w-full h-full opacity-50" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-1">
                        No containers available
                    </h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                        All our containers are currently booked. Please check back later or contact our support team.
                    </p>
                </div>
            )}
        </div>
    );
};

export default NewBookings;