# PROJETO

### FUNCIONAMENTO
  <p>O projeto foi desenvolvido com o propósito de decriptar uma imagem encodada em base64 e encriptada com AES 256 ECB.</p>
  <p>O arquivo decriptar.js tem a função de fazer esse processo de decriptação utilizando a chave fornecida, e essa chave poderia ser qualquer link dos produtos do site https://www.arezzo.com.br/ da categoria Sapato, então precisava testar todos os links dos produtos dessa categoria, até que o link correto decriptasse a imagem.</p> 
  <p>Então para isso, foi utilizado um Web crawler, cujo código está em final.js, em que captura todos os links dos produtos de forma automática e testa no código do arquivo decriptar.js, e se caso fosse o link correto, iria ser gerado a imagem decriptada, que no caso é a bem_vindo_enext.png</p>
  
### RESULTADO
  <p>Foi criado uma página HTML para que o usuário anexasse a imagem Encodada e Encriptada em Texto, e inserisse a Chave, que no caso seria o link que foi encontrado utilizando o Web crawler, e então o sistema decripta a imagem gerando-a em uma pasta do projeto.</p>

### TECNOLOGIAS
  <p>Foi utilizado NodeJS em que foi criado um arquivo server.js para representar um servidor que faz a comunicação entre o Back-end, que seria os arquivos .js com o Front-end que seria o arquivo .html para que funcione corretamente e seja mostrado para o usuário de uma forma estilizada e interativa.</p>
  <p>Foi utilizado a biblioteca do Bootstrap para auxiliar na estilização da página HTML.</p>
  
<p style="margin-top:100px;"><img src="http://alejunqueira.com.br/img/tela-enext.png" width="600"></p>

