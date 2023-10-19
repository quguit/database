

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//rotas
app.get('/add-pagamento', function(req,res){
   res.send("Formulario para cadastrar pagamento")
});

app.listen(8080);

