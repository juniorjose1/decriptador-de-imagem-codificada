// Import das dependências
const md5 = require('md5');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Obtendo a imagem string que representa a imagem fornecida, encodada em base 64 e encriptada com AES 256
const encriypedAndEncodedImage = fs.readFileSync('texto.txt', 'utf-8');

// Obtendo a chave que encriptou a imagem
const KEY_URL = "https://www.arezzo.com.br/sapatos/rasteiras/sandalia-rasteira-metalizada-tiras-azul/p/0327400120111U";
const KEY = md5(KEY_URL);

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
    if(buf.length > 100){
    	fs.writeFileSync(path.join(__dirname, filename), buf);   
	}
}

const encodedImage = decrypt(KEY, encriypedAndEncodedImage);
decode_base64(encodedImage, 'imgem_gerada.png');