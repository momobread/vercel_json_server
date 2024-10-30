const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('post.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3300);
