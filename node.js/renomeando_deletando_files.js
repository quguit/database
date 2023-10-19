const fs = require('fs')
const read = require('readline');

// //deletar
// fs.unlink('test.txt', function(err){
//     console.log('arquivo foi deletado');
// })

//renomear
fs.rename('test.txt', 'test2.txt', function(err){
    console.log('arquivo foi renomeado.');
}) 

