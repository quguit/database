const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual seu nome?', function(name){
    console.log('o nome do usuário é :' +name);
    rl.question('Qual sau idade?', function(idade){
        console.log('A idade do '+name+' é '+idade);
    })
})

rl.on('close', function(){
    console.log('adeus');
    process.exit(0);
})