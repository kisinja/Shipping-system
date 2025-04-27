// components/Map.tsx
'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    currentPosition: [number, number] | null;
    path: [number, number][];
    zoom?: number;
}

export default function Map({ currentPosition, path, zoom = 2 }: MapProps) {
    const mapRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);
    const polylineRef = useRef<L.Polyline | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView(
                currentPosition || [20, 0],
                zoom
            );

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapRef.current);
        }

        // Update ship position
        if (currentPosition) {
            if (!markerRef.current) {
                const shipIcon = L.icon({
                    iconUrl: '/ship-marker.png',
                    iconSize: [32, 32],
                    iconAnchor: [16, 16]
                });

                markerRef.current = L.marker(currentPosition, { icon: shipIcon })
                    .addTo(mapRef.current)
                    .bindPopup('Current Position');
            } else {
                markerRef.current.setLatLng(currentPosition);
            }

            mapRef.current.setView(currentPosition, zoom);
        }

        // Update path
        if (path.length > 0) {
            if (!polylineRef.current) {
                polylineRef.current = L.polyline(path, { color: '#3b82f6' })
                    .addTo(mapRef.current);
            } else {
                polylineRef.current.setLatLngs(path);
            }
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [currentPosition, path, zoom]);

    return <div id="map" className="h-[400px] w-full" />;
};