const fs = require('fs')
const read = require('readline');

fs.readFile('test.txt',function(err,data){

    let str = data.toString();

    // //o separador é a '/' se torna um array
    // let newStr = str.split('/');

    //digo quais indicies eu quero no meu arquivo
    let newStr = str.substr(1,3);

    console.log(newStr);
})

