// lib/ws-server.ts
import { WebSocketServer } from 'ws';
import type { Server } from 'http';

let wss: WebSocketServer | null = null;

export function setupWebSocket(server: Server) {
    if (wss) return; // prevent duplicate setups

    wss = new WebSocketServer({ server });

    wss.on('connection', (socket, req) => {
        const url = new URL(req.url || '', `http://${req.headers.host}`);
        const shipmentId = url.searchParams.get('shipmentId');

        console.log(`WebSocket connected for shipment: ${shipmentId}`);

        socket.send(JSON.stringify({
            message: `Connected to WebSocket for shipment ID: ${shipmentId}`,
        }));

        // Example: send updates every 5 seconds
        const interval = setInterval(() => {
            socket.send(JSON.stringify({
                latitude: -1 + Math.random() * 2,
                longitude: 36 + Math.random() * 2,
                speed: Math.random() * 30,
                heading: Math.random() * 360,
                timestamp: new Date().toISOString(),
            }));
        }, 5000);

        socket.on('close', () => {
            console.log('WebSocket closed');
            clearInterval(interval);
        });
    });

    console.log('✅ WebSocket server is running.');
}
