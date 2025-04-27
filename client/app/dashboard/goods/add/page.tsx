'use client';

import axios from 'axios';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { PackageIcon, ScaleIcon, DollarSignIcon } from '@/components/Icons';

export default function AddGoodsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const containerId = searchParams.get('containerId');
    const shipmentId = searchParams.get('shipmentId');
    console.log(searchParams);

    const [formData, setFormData] = useState({
        description: '',
        quantity: 1,
        weight: 0,
        value: 0
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Enhanced color palette
    const colors = {
        primary: 'bg-gradient-to-r from-cyan-600 to-blue-700',
        secondary: 'bg-teal-100',
        accent: 'bg-amber-500',
        success: 'bg-emerald-500',
        error: 'bg-rose-500',
        text: 'text-slate-800',
        lightText: 'text-slate-100',
        mutedText: 'text-slate-500',
        cardBg: 'bg-white',
        border: 'border-slate-200'
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post('/api/goods/add', {
                ...formData,
                quantity: parseInt(formData.quantity.toString()),
                weight: parseFloat(formData.weight.toString()),
                value: parseFloat(formData.value.toString()),
                containerId,
                shipmentId
            });

            if (response.data.success) {
                setMessage({ type: 'success', text: 'Goods added successfully!' });
                setTimeout(() => router.push('/dashboard'), 1500);
            } else {
                setMessage({ type: 'error', text: response.data.message || 'Something went wrong' });
            }
        } catch (error: any) {
            if (error.response) {
                setMessage({ type: 'error', text: error.response.data?.message || 'Server error' });
            } else {
                setMessage({ type: 'error', text: 'Network error, try again later.' });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <div className={`text-center mb-8 ${colors.text}`}>
                    <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${colors.secondary} mb-4`}>
                        <PackageIcon className="h-6 w-6 text-cyan-700" />
                    </div>
                    <div className="py-3 px-6 bg-blue-50 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
                            Add Goods
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            {containerId ? `Container: ${containerId}` : ''}
                        </p>
                    </div>
                </div>

                <div className={`${colors.cardBg} shadow-xl rounded-xl p-8 border ${colors.border}`}>
                    {message && (
                        <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                            <div className="flex items-center">
                                <div className={`flex-shrink-0 mr-3 ${message.type === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                    {message.type === 'success' ? (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <div className="text-sm font-medium">{message.text}</div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <textarea
                                    name="description"
                                    rows={3}
                                    className={`block w-full rounded-lg border ${colors.border} p-3 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Detailed description of goods"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="number"
                                        name="quantity"
                                        className={`block w-full rounded-lg border ${colors.border} p-3 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
                                        min={1}
                                        required
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 items-center">
                                    <ScaleIcon className="w-4 h-4 mr-1 text-slate-500" />
                                    Weight (kg)
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="number"
                                        name="weight"
                                        step="0.01"
                                        className={`block w-full rounded-lg border ${colors.border} p-3 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
                                        required
                                        value={formData.weight}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1 items-center">
                                <DollarSignIcon className="w-4 h-4 mr-1 text-slate-500" />
                                Declared Value (USD)
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-slate-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    type="number"
                                    name="value"
                                    step="0.01"
                                    className={`block w-full pl-7 rounded-lg border ${colors.border} p-3 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500`}
                                    required
                                    value={formData.value}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center items-center py-3 px-4 rounded-lg font-semibold text-white ${colors.primary} hover:opacity-90 transition-all duration-200 ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <>
                                        {/* <Loader2Icon className="animate-spin -ml-1 mr-2 h-5 w-5" /> */}
                                        Processing...
                                    </>
                                ) : (
                                    'Add Goods to Shipment'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}