const server = require('./app');
const port = 8080;

server.set('port', port);

server.listen(port, ()=>{
    console.log('Server listening at #', port);
})