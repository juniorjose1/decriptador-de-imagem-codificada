PROJETO

Task 1 e Task 3 - Est� no arquivo "task3.js", este arquivo possui o webcrawler que itera por todas as p�ginas do site, e vai testando todas as URLs para gerar a imagem correta, e ele identifica se a imagem � verdadeira pelo tamanho do arquivo, pois verifiquei que os arquivos incorretos gerados, eram formado por alguns bytes apenas... ent�o coloquei uma regra para que se gerasse um arquivo maior que mil bytes, ele salvava a imagem e for�ei um erro, para parar justamente na URL correta.

Task 4 - S�o os arquivos "final.js", "decriptar.js", server.js" e "public/index.html".
server.js � o arquivo que usei para criar um servidor, e � onde fiz a comunica��o entre o back e front, ou seja, � onde os arquivos "final.js" e "decriptar.js" "conversam" com "index.html".
Separei os c�digos da fun��o Decriptar com os c�digos da fun��o do webcrawler para poder ter um uso mais independente do decriptar para ser chamado no arquivo "server.js".

Pasta "uploads" cont�m os arquivos que os usu�rios fazem upload pela pagina web do index.html

O Arquivo texto.txt � a imagem para teste que voc� nos enviou que est� encodada e encriptada.

Dentro dos arquivos ".js" fiz mais alguns coment�rios, e em rela��o a bibliotecas tamb�m.

No arquivo html, usei Bootstrap no CSS. 

