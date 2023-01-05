# node-wss-server
Websocket over TLS server example in node js

# How to create certificate files

- Step 0:
Delete old certificate files `cert.pem`, `key.pem`, `key-rsa.pem`

- Step 1:
Create certificates with: `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365` key.pem is the private key

- Step 2:
Create rsa encoded version: `openssl rsa -in key.pem -out key-rsa.pem`
