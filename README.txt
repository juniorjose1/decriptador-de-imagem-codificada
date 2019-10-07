PROJETO

Task 1 e Task 3 - Está no arquivo "task3.js", este arquivo possui o webcrawler que itera por todas as páginas do site, e vai testando todas as URLs para gerar a imagem correta, e ele identifica se a imagem é verdadeira pelo tamanho do arquivo, pois verifiquei que os arquivos incorretos gerados, eram formado por alguns bytes apenas... então coloquei uma regra para que se gerasse um arquivo maior que mil bytes, ele salvava a imagem e forçei um erro, para parar justamente na URL correta.

Task 4 - São os arquivos "final.js", "decriptar.js", server.js" e "public/index.html".
server.js é o arquivo que usei para criar um servidor, e é onde fiz a comunicação entre o back e front, ou seja, é onde os arquivos "final.js" e "decriptar.js" "conversam" com "index.html".
Separei os códigos da função Decriptar com os códigos da função do webcrawler para poder ter um uso mais independente do decriptar para ser chamado no arquivo "server.js".

Pasta "uploads" contém os arquivos que os usuários fazem upload pela pagina web do index.html

O Arquivo texto.txt é a imagem para teste que você nos enviou que está encodada e encriptada.

Dentro dos arquivos ".js" fiz mais alguns comentários, e em relação a bibliotecas também.

No arquivo html, usei Bootstrap no CSS. 

