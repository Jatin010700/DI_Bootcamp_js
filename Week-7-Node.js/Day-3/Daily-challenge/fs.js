let fs = require('fs')
fs.readFile('RightLeft.txt', 'utf-8', function (err, data){
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

console.log("-----------Right and Left Text---------")

//-----INCOMPLETE----//