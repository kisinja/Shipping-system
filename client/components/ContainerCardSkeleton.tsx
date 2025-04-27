'use client';

import React from 'react';
import { ContainerIcon } from '@/components/Icons';

export const ContainerCardSkeleton = () => {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-slate-200 animate-pulse">
            {/* Status Ribbon Skeleton */}
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-slate-200 text-transparent rounded-bl">
                Loading
            </div>

            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-slate-100 mr-4">
                        <ContainerIcon className="w-6 h-6 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold bg-slate-200 text-transparent rounded w-3/4">
                        &nbsp;
                    </h3>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-slate-200 rounded mr-2"></div>
                        <span className="text-sm font-medium bg-slate-200 text-transparent rounded w-1/2">
                            &nbsp;
                        </span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-slate-200 rounded mr-2"></div>
                        <span className="text-sm font-medium bg-slate-200 text-transparent rounded w-2/3">
                            &nbsp;
                        </span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="w-full py-3 px-4 rounded-lg font-semibold bg-slate-200 text-transparent">
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
};