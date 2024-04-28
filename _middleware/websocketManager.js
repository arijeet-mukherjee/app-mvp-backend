const WebSocket = require('ws');

class WebSocketManager {
  constructor(server) {
    this.wss = new WebSocket.Server({ server });
    this.clients = new Set();

    this.wss.on('connection', (ws) => {
      this.clients.add(ws);
      console.log('Client connected');

      ws.on('message', (message) => {
        // Handle incoming messages
        console.log('Received message:', message);
      });

      ws.on('close', () => {
        this.clients.delete(ws);
        console.log('Client disconnected');
      });
    });
  }

  broadcast(message) {
    this.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }
}

module.exports = WebSocketManager;
