var request = require('request');
var cheerio = require('cheerio');
const md5 = require('md5');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

//Função Recursiva para gerar o webcrawler uma página por vez, pois se executar o request direto, ocorre Timeout
function executar(y, max){
	console.log('Página ' + y);
	if (y < max) {
		request('https://www.arezzo.com.br/c/sapatos?q=%3Acreation-time&page='+ y, function(err, res, body){
			if(err) console.log('Erro: ' + err);

			var $ = cheerio.load(body);

			$('ul.arz-storefront-products > li.arz-storefront-product').each(function(){
				var link = 'https://www.arezzo.com.br' + $(this).find('div.arz-product-wrapper--bordered > a.arz-cover-link').attr('href');

				console.log('Link: ' + link);
				decriptar(link, 'task3/imagem1.txt', 'imagem_gerada_final1.png');
				decriptar(link, 'task3/imagem2.txt', 'imagem_gerada_final2.png');
				decriptar(link, 'task3/imagem3.txt', 'imagem_gerada_final3.png');

			});
			executar(y + 1, max);
		});
	}
}

// Função para decriptar um texto em hexadecimal com a chave fornecida usando AES 256 ECB
function decrypt(key, text) {
    var decipher = crypto.createDecipheriv('aes-256-ecb', key.toString('binary'), '');
    decipher.setAutoPadding(false);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec 
}

// Função que cria um arquivo de imagem a partir da string base64 desta
function decode_base64(base64str, filename) {
    var buf = Buffer.from(base64str, 'base64');
    if(buf.length > 1000){//Se o arquivo gerado tiver + de 1000 bytes, salvar o arquivo 
    	fs.writeFileSync(path.join(__dirname, filename), buf);
    	throw new Error();//gera um erro para o webcrawler pausar no link que gerou a imagem.   
	}

}

function decriptar(key_url, imgdecript, nomeimgdecript){
	const encriypedAndEncodedImage = fs.readFileSync(imgdecript, 'utf-8');
	const KEY = md5(key_url);
	const encodedImage = decrypt(KEY, encriypedAndEncodedImage);
	decode_base64(encodedImage, nomeimgdecript);
}

executar(0, 541);//executar 541 vezes, pois verifiquei que tem 541 páginas