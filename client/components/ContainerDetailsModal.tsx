'use client';

import React from 'react';
import { Container, Goods } from '@/types/container';
import { PackageIcon, XIcon, ScaleIcon, DollarSignIcon, ShipIcon, PortIcon } from '@/components/Icons';
import { buttonVariants } from './ui/button';

interface ContainerDetailsModalProps {
    container: Container & { goods: Goods[] };
    onClose: () => void;
}

const ContainerDetailsModal: React.FC<ContainerDetailsModalProps> = ({ container, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900/90 to-gray-900/90 backdrop-blur-sm p-4">
            {/* Animated Container Shape */}
            <div className="absolute -z-10 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl animate-float"></div>

            <div className="relative w-full max-w-2xl max-h-screen rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl border border-gray-700 overflow-hidden flex flex-col">
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>

                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                            <ShipIcon className="h-6 w-6 text-blue-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                            #{container.containerId}
                            <span className="block text-sm font-medium text-gray-400">Container Contents</span>
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-700/50 transition-all duration-200 group"
                    >
                        <XIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-12rem)] hide-scrollbar">
                    {/* Container Info - Card Style */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-blue-400/30 transition-colors">
                            <p className="text-xs font-medium text-gray-400 mb-1">Size</p>
                            <p className="text-lg font-semibold text-white">{container.size}</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-400/30 transition-colors">
                            <p className="text-xs font-medium text-gray-400 mb-1">Type</p>
                            <p className="text-lg font-semibold text-white">{container.type}</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
                            <p className="text-xs font-medium text-gray-400 mb-1 flex items-center gap-1">
                                <PortIcon className="h-3 w-3" />
                                Current Location
                            </p>
                            <p className="text-lg font-semibold text-white">{container.currentPort}</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-amber-400/30 transition-colors">
                            <p className="text-xs font-medium text-gray-400 mb-1">Status</p>
                            <p className="text-lg font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                                {container.status.toLowerCase().replace('_', ' ')}
                            </p>
                        </div>
                    </div>

                    {/* Goods List - Interactive 3D Cards */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="flex items-center text-xl font-bold text-white">
                                <PackageIcon className="mr-3 h-6 w-6 text-blue-400" />
                                Cargo Details
                            </h4>
                            <div className="text-sm font-medium px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-700/50">
                                {container.goods?.length || 0} Items
                            </div>
                        </div>

                        {container.goods && container.goods.length > 0 ? (
                            <div className="space-y-3 max-h-96 overflow-y-scroll pr-2 hide-scrollbar">
                                {container.goods.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group relative rounded-xl p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-0.5"
                                    >
                                        <div className="absolute -z-10 inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <p className="text-lg font-semibold text-white mb-2">{item.description}</p>
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                            <div className="flex items-center">
                                                <ScaleIcon className="mr-2 h-4 w-4 text-blue-400" />
                                                <span className="text-gray-300">{item.weight} kg</span>
                                            </div>
                                            <div className="flex items-center">
                                                <DollarSignIcon className="mr-2 h-4 w-4 text-green-400" />
                                                <span className="text-gray-300">${item.value.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-gray-400 mr-2">Qty:</span>
                                                <span className="font-medium text-white">{item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-gray-700 bg-gray-800/20">
                                <PackageIcon className="h-10 w-10 text-gray-600 mb-3" />
                                <p className="text-gray-500 text-center">This container is currently empty</p>
                                <p className="text-sm text-gray-600 mt-1">Add goods to see them listed here</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end p-6 border-t border-gray-700">
                    <button
                        onClick={onClose}
                        className={buttonVariants({
                            variant: "outline",
                            className: "bg-transparent border border-gray-600 hover:bg-gray-700/50 hover:border-gray-500 text-gray-300 hover:text-white transition-all"
                        })}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContainerDetailsModal;