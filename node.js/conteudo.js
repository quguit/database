
// {//exibe no terminal
// console.log("Hello Wordl");

// //cria uma função e exibe resultado
// function somar(n1,n2){
//     console.log(n1+n2);
// }

// //execulta a função 
// somar(10,20);

// // execulta a função a cada 2 segundos
// setInterval(function(){
//     somar(15,20);
// },2000)

//1º passos da um require no modulo do node ou um criado }

const http = require('http');

//permite manipular arquivos com node
const fs = require('fs')

//definir nosso servidor
const hostname = "127.0.0.1";

//definir a porta do nosso servidor
const port = 3000;

//criar novo arquivo
// fs.writeFile('file.txt','test criar arquivo', function(err){
//     if (err) throw err;

//     console.log('arquivo criado');
// })

//criar novo arquivo, caso ja exista adicionar ao final do arquivo existente
fs.appendFile('test.txt', "\n Conteudo novo adicionado", (err)=>{
    if (err) throw err;
    console.log('documento salvo!');
})

// erro fuctiond
const server = http.createServer((req, res)=>{
    // // res é a resposta para quem está ascessando nosso servidor
    // res.statusCode = 200;
    // res.setHeader('Content-type','text/plain');
    
    // //para quando o usuario ascessar a pagina
    // res.end("Hello Word!");

    if (req.url == '/guit') {

        fs.readFile('index.html', function(err,data){
            //enviar resposta para o usuario
            res.writeHead(200, {'content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }else{
       return res.end();
    }

    
})

server.listen(port, hostname,()=>{
    console.log("servidor está rodando!");
})