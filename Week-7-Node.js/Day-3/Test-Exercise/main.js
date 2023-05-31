let fs = require('fs');

// READ FILE

// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });

// console.log("-----Restaurant Menu---------", '\n',);


//WRITEFILE
// fs.writeFile('test.txt', 'Hello World!', function (err) { 
//     if (err){ 
//         console.log(err);
//     }
//     else{
//         console.log('Write operation complete.');
//     }
// });


//APPENDFILE
// fs.appendFile('menu.txt', data='\n this ia a test', function (err) {
//     if (err) {
//         console.error(err)
//         return
//     }
// });

//DELETEFILE
// fs.unlink('test.txt', function (err) {
//     console.log('write operation complete.');
// });

//READ DIRECTORY
// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log('files: ', files)
// })