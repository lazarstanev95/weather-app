const http = require('http');
const app = require('./app');

const port = process.env.PORT || 4000; //process.env

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server is running on Port:', port);
});