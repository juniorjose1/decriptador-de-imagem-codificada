const md5 = require('md5');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');


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
    if(buf.length > 1000){
    	fs.writeFileSync(path.join(__dirname, filename), buf); 
    	return true;
	}
	return false;
}

function decriptar(key_url, imgdecript, nomeimgdecript){
	const encriypedAndEncodedImage = fs.readFileSync(imgdecript, 'utf-8');
	const KEY = md5(key_url);
	const encodedImage = decrypt(KEY, encriypedAndEncodedImage);
	if(decode_base64(encodedImage, nomeimgdecript)){
		return true;
	}
		return false;
}

function decriptarPorTexto(key_url, textodecript, nomeimgdecript){
	const KEY = md5(key_url);
	const encodedImage = decrypt(KEY, textodecript);
	decode_base64(encodedImage, nomeimgdecript);
}

module.exports = {
	decriptar: decriptar,
	decriptarPorTexto: decriptarPorTexto
}

