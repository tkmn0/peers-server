# Peers Server
Peers - WebRTC full mesh implementation.
This is full mesh topology WebRTC library. So, this library is not good at scallability, BUT server side can forcus handling of signaling.

## Links
- [Demo](https://npeers.herokuapp.com/) is running on heroku.
- [peers-web](https://github.com/tkmn0/peers-web) - peers client side library
- examples
    - [Demo Source Code](https://github.com/tkmn0/peers-server-example-express-typescript) - run with express written in Typescript. included web app (written in vue.js).
    - [peers client example vue](https://github.com/tkmn0/peers-web-example-vue) - written in Vue.js
    - [example server node](https://github.com/tkmn0/peers-example-node) - simple node js example. only server side.

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