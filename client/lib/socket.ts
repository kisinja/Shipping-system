// lib/socket.ts
import { io } from "socket.io-client";

export const socket = io("http://localhost:3002", {
    transports: ["websocket"], // optional, for faster connection
});
