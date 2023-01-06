import * as fs from 'fs';
import * as https from 'https';
import * as WebSocket from 'ws';

const server = https.createServer({
  cert: fs.readFileSync('./cert.pem'),
  key: fs.readFileSync('./key.pem'),
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: string) => {
    console.log(`Received message => ${message}`);
  });
  ws.send('Hi there, I am a WebSocket server');
});

server.listen(8080);
