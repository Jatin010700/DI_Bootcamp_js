const http = require('http'); 
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'text/html');
    //3
    res.end(
 `  <html>
    <body>
        <h1>This is my first response</h1>
        <h2>This is my second response</h2>
        <p>This is my third response</p>
    </body>
    </html> `
    );
});

server.listen(5000); 
console.log('Node.js web server at port 5000 is running..')