# node-wss-server
Websocket over TLS server example in node js

# How to create certificate files

- Step 0:
Delete old certificate files `cert.pem`, `key.pem`

- Step 1:
Create certificates with: `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes` key.pem is the private key

- Step 2:
run server with: `npm run start`

- Step 3:
Run client with 
`const wss = new WebSocket('wss://localhost:8080');
    wss.onerror = err => console.log(err);
    wss.onmessage = msg => console.log(msg.data);`
