import * as fs from 'fs';
import * as https from 'https';
import * as WebSocket from 'ws';

const server = https.createServer({
  cert: fs.readFileSync('./cert.pem'),
  key: fs.readFileSync('./key.pem'),
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log("connection started");
  ws.on('message', (message: string) => {
    console.log(`Received message => ${message}`);
    ws.send(`Hi there, I have received the message: '${message}'`);
  });
  ws.send('Hi there, I am a WebSocket server');
});

wss.on("listening", () => console.log("listening!"))

server.listen(8080);
