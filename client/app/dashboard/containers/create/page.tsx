'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreateContainerForm: React.FC = () => {
    const [formData, setFormData] = useState({
        containerId: '',
        size: '',
        type: '',
        currentPort: '',
        status: 'AVAILABLE'
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post('/api/containers/create', formData);
            setMessage({ text: 'Container created successfully!', type: 'success' });
            setTimeout(() => {
                router.push('/dashboard');
            }, 1500);
        } catch (error: any) {
            setMessage({
                text: error.response?.data?.message || 'Something went wrong',
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Create New Container</h2>

            <div className="space-y-4">
                <input
                    type="text"
                    name="containerId"
                    placeholder="Container ID"
                    value={formData.containerId}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="size"
                    placeholder="Size (e.g., 20ft, 40ft)"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type (e.g., Dry, Reefer)"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="currentPort"
                    placeholder="Current Port (e.g., MBS)"
                    value={formData.currentPort}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                    required
                />
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                >
                    <option value="AVAILABLE">AVAILABLE</option>
                    <option value="BOOKED">BOOKED</option>
                    <option value="IN_TRANSIT">IN_TRANSIT</option>
                    <option value="AT_PORT">AT_PORT</option>
                    <option value="MAINTENANCE">MAINTENANCE</option>
                </select>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
                >
                    {loading ? 'Creating...' : 'Create Container'}
                </button>

                {message && (
                    <div
                        className={`mt-4 text-center text-sm font-medium ${message.type === 'success'
                            ? 'text-green-600'
                            : 'text-red-600'
                            }`}
                    >
                        {message.text}
                    </div>
                )}
            </div>
        </form>
    );
};

export default CreateContainerForm;
