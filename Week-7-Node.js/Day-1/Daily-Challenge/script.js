let operator = require('./main.js');

const b = 5;

console.log(operator.largeNum + b)

//-----------part 2----------

let http = require("http");
const server = http.createServer( (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>Hi there at the frontend</h1></body></html>`);
   console.log('I am listening....');
});
server.listen(3000);

//----------part 3----------



let HTTP = require("http");
const getServer = HTTP.createServer( (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
   console.log('Its working....');
   res.end(`<html><body><p>The Date and time are currently: ${operator.dateTime}</p></body></html>`);

});
getServer.listen(8080)