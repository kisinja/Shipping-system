'use client';

import React, { Suspense } from 'react';
import ContainerCard from './ContainerCard';
import { ContainerCardSkeleton } from './ContainerCardSkeleton';
import { Container } from '@/types/container';

interface ContainersGridProps {
    containers: Container[];
    loading: string | null;
    onBookingSuccess: (containerId: string) => void;
    setLoading: (id: string | null) => void;
    setMessage: (message: { text: string; type: 'success' | 'error' } | null) => void;
}

export const ContainersGrid = ({
    containers,
    loading,
    onBookingSuccess,
    setLoading,
    setMessage
}: ContainersGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {containers.map((container) => (
                <Suspense key={container.id} fallback={<ContainerCardSkeleton />}>
                    <ContainerCard
                        container={container}
                        loading={loading}
                        onBookingSuccess={onBookingSuccess}
                        setLoading={setLoading}
                        setMessage={setMessage}
                    />
                </Suspense>
            ))}
        </div>
    );
};