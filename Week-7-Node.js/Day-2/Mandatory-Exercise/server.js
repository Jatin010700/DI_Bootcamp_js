const express = require('express')
const app = express()

//---------PART1-----------//
// app.use(express.static('public'))

// app.get('/users', (req, res) => {
//         const user = { firstname: 'John', lastname: 'Doe'} 
//         console.log(user)
//         res.send(JSON.stringify({user}));
// });

// app.listen(3000, () => { 
// console.log('Node.js web server at port 3000 is running..')
// });



//----------PART2---------//
// app.get('/:ID', (req, res) => {
//     const ID = req.params.ID
//         const response = { ID: ID };
//         console.log(response);
//         res.json(response)
// });

// app.listen(3000, () => { 
// console.log('Node.js web server at port 3000 is running..')
// });



//----------PART3----------//

app.use(express.static('publicEx3'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});