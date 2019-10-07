var request = require('request');
var cheerio = require('cheerio');
var decriptar = require('./decriptar.js');


//Função Recursiva para gerar o webcrawler uma página por vez
function executar(y, max){
	console.log('Página ' + y);
	if (y < max) {
		request('https://www.arezzo.com.br/c/sapatos?q=%3Acreation-time&page='+ y, function(err, res, body){
			if(err) console.log('Erro: ' + err);

			var $ = cheerio.load(body);

			$('ul.arz-storefront-products > li.arz-storefront-product').each(function(){
				var link = 'https://www.arezzo.com.br' + $(this).find('div.arz-product-wrapper--bordered > a.arz-cover-link').attr('href');

				console.log('Link: ' + link);
				decriptar.decriptar(link, 'task3/imagem1.txt', 'imagem_gerada_final1.png');
				decriptar.decriptar(link, 'task3/imagem2.txt', 'imagem_gerada_final2.png');
				decriptar.decriptar(link, 'task3/imagem3.txt', 'imagem_gerada_final3.png');

			});
			executar(y + 1, max);
		});
	}
}

executar(0, 541);