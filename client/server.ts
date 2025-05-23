// server.ts
import { createServer } from 'http';
import next from 'next';
import { setupWebSocket } from './lib/websocket-server';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer((req, res) => handle(req, res));

    // Attach WebSocket server to HTTP server
    setupWebSocket(server);

    server.listen(port, () => {
        console.log(`🚀 Server ready on http://localhost:${port}`);
    });
});
