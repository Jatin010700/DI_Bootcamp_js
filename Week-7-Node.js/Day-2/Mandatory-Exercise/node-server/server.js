const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http'); 
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'application/json');
    //3
    res.end(JSON.stringify({user}));
});

server.listen(4000); 
console.log('Node.js web server at port 4000 is running..')