# Bank app

<h1>Sobre</h1>
<p>Aplicação que fornece os serviços do Banco Capgemini. Com essa aplicação é possível realizar depósitos, fazer saques e verificar o saldo atual.</p>

<h1>Passos para a execução</h1>
<h3>Backend</h3>
<p>O backend (diretório <b>transaction</b>) pode ser facilmente importado no Eclipse. Caso possua o plugin de STS, dá pra executar diretamente do Eclipse.</p>
<p>Para a parte de persistência, foi utilizado JPA e Spring Data para facilitar a comunicação com o Banco de Dados e a criação de tabelas automaticamente. Assim, para executar esse projeto é necessário ter o MySQL instalado, basicamente para capturar os dados de contas. O schema deve se chamar bank e ter root como user e password (isso pode ser modificado no arquivo <i>application.properties</i>).</p>

<h4>API</h4>
<p>Para cada operação, existe um endpoint disponível na REST. Adicionalmente, criei um endpoint para criar contas (caso necessário, remover o <b>@CrossOrigin</b> do controller).</p>

<h3>Frontend</h3>
<p>Para o frontend, é necessário ter o npm instalado. Após aplicar o comando: <i>npm install</i> no projeto, utilizar o comando <i>ng serve</i> para iniciar o servidor.</p>
<p>Note que, para haver a interação ideal entre as duas camadas, é necessário que ambos os servidores estejam ativos.</p>

<h1>Arquitetura</h1>
<p>A arquitetura utilizada para o backend foi baseada no padrão <b>Spring MVC</b>. O Spring MVC é um framework que ajuda no desenvolvimento de aplicações web. Com ele nós conseguimos construir aplicações web robustas e flexíveis.</p>
<p>Com a estrutura bem definida do backend, a modificação do frontend ou até o uso de múltiplos frontends pode ser facilitado, visto que os dados podem ser facilmente acessados pela REST.</p>
<p>Em relação ao frontend, foi utilizado um padrão semelhante ao MVC, tendo como componentes: as views HTML, os controllers/componentes e os serviços de comunicação com a REST.</p>
