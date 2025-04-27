import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const PORT = 3002;
const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

// Track connected clients by shipmentId
const clients = new Map<string, Set<string>>();

io.on('connection', socket => {
    console.log(`Client connected: ${socket.id}`);

    // Join a shipment room
    socket.on('join-shipment', (shipmentId: string) => {
        socket.join(shipmentId);
        console.log(`Socket ${socket.id} joined shipment ${shipmentId}`);

        if (!clients.has(shipmentId)) {
            clients.set(shipmentId, new Set());
        }
        clients.get(shipmentId)?.add(socket.id);
    });

    // Handle position updates from carriers
    socket.on('position-update', (data: {
        shipmentId: string;
        latitude: number;
        longitude: number;
        speed?: number;
        heading?: number;
    }) => {
        io.to(data.shipmentId).emit('position-updated', {
            position: [data.latitude, data.longitude],
            speed: data.speed,
            heading: data.heading,
            timestamp: new Date().toISOString()
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
        // Clean up client tracking
        clients.forEach((sockets, shipmentId) => {
            if (sockets.has(socket.id)) {
                sockets.delete(socket.id);
                if (sockets.size === 0) {
                    clients.delete(shipmentId);
                }
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Socket.IO server is running on http://localhost:${PORT}`);
});