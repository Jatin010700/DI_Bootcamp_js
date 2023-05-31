// const http = require('http');

// const json =
// {
//     "menu": {
//         "id": "file",
//         "value": "File",
//         "popup": {
//             "menuitem": [
//                 { "value": "New", "onclick": "CreateNewDoc()" },
//                 { "value": "Open", "onclick": "OpenDoc()" },
//                 { "value": "Close", "onclick": "CloseDoc()" }
//             ]
//         }
//     }
// }


// const server = http.createServer((req, res) => {
//     if (req.url == '/json') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(json));
//     }
//     else if (req.url == '/welcome') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>Welcome new user</p></body></html>');
//         res.end();
//     } else {
//         res.end('<html><body><p>Another page</p></body></html>');
//     }
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running..')

// if (email=='test@gmail.com' && password=='123456789'){
//     // res.send('login successfull')
// }
