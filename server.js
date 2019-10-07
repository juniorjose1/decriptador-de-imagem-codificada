//criar e subir um servidor
const http = require("http");
//framework de servidor
const express = require("express");
//criando app
const app = express();

//chamando meu arquivo decriptar.js
const decriptar = require("./decriptar.js");

//configurando multer para upload de arquivos
const multer = require('multer');


const path = require('path');

// cria uma instância do middleware configurada
// destination: lida com o destino
// filename: permite definir o nome do arquivo gravado
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });

//configurar o Express para compartilhar a pasta estática "public"
app.use(express.static('public'));


// rota indicado no atributo action do formulário
app.post('/file/upload', upload.single('file'), 
    (req, res) => {
    	console.log(req.body.url);
    if(decriptar.decriptar(req.body.url, "uploads/" + req.file.filename, 'bem_vindo_enext.png')){
    	res.send('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><div style="text-align:center; margin-top:8%"><div style="color:green;"><h2>Decriptado Com Sucesso !</h2></div><div style="margin-top=5%"><h3>Imagem gerada com o nome "bem_vindo_enext.png"<br>Se encontra na pasta raiz do projeto</h3><br><h4><a href="http://localhost:3000/" target="_self">Decriptar Novamente</a></h4></div>')
    } else{
    	res.send('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><div style="text-align:center; margin-top:8%"><div style="color:red;"><h1>A Decriptação Falhou !</h1></div><div style="margin-top=10%"><h2>Chave Incorreta<br></h2><h3><a href="http://localhost:3000/" target="_self">Tente Novamente</a></h3></div>')
    }
    
});


http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
