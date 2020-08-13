# Peers Server
Peers - WebRTC full mesh implementation.
This is full mesh topology WebRTC library. So, this library is not good at scallability, BUT server side can forcus handling of signaling.

## Features
- Room
- MediaStatus handling
- Signaling Handling
- 100% Written in Typescript
- Built with webpack you can use this library for Typescript and node.js both.
- Linted
- Simple API
- Embed Logger

## Dependencies
- log4js
- socket.io
- uuid

## Installation
`npm install peers-server`

## How to use
```
const server = require('http').createServer();;
const Peers = require('peers-server').default;

const port = 3000;
server.listen(port, () => console.log("server started at:", port));

const peers = new Peers(server);
peers.setLogLevel('info');
peers.start();
```