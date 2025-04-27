// components/DocumentsPanel.tsx
'use client';

import { FileText, Download, FileUp } from 'lucide-react';
import { buttonVariants } from './ui/button';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Document {
    id: string;
    name: string;
    type: string;
    url: string;
    uploadedAt: Date;
}

export function DocumentsPanel({ shipmentId }: { shipmentId: string }) {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const res = await axios.get(`/api/shipments/${shipmentId}/documents`);
                setDocuments(res.data);
            } catch (error) {
                console.error('Failed to fetch documents', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDocuments();
    }, [shipmentId]);

    const handleDownload = (url: string, name: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <FileText className="w-5 h-5 text-blue-500" />
                    Shipping Documents
                </h3>
                <button
                    className={buttonVariants({ variant: 'outline', size: 'sm' })}
                    onClick={() => document.getElementById('file-upload')?.click()}
                >
                    <FileUp className="w-4 h-4 mr-2" />
                    Upload
                </button>
                <input id="file-upload" type="file" className="hidden" />
            </div>

            {isLoading ? (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            ) : documents.length > 0 ? (
                <div className="space-y-3">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <FileText className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <p className="font-medium">{doc.name}</p>
                                    <p className="text-xs text-gray-500">
                                        {new Date(doc.uploadedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDownload(doc.url, doc.name)}
                                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                            >
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                    <FileText className="mx-auto h-8 w-8 text-gray-400" />
                    <h4 className="mt-2 text-sm font-medium text-gray-900">
                        No documents
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                        Upload shipping documents here
                    </p>
                </div>
            )}
        </div>
    );
}