<h1 align="center">
  <img src="readme-files/singu.png" width="320" /> 
</h1>
<h3 align="center">
:iphone:  <a href="https://github.com/gabrielbarth/singu-fake-app">Projeto mobile</a>
</h3>

<br>
Esta aplicação foi desenvolvida utilizando Nodejs + Typescript com intuito de prover alguns dados para o <a href="https://github.com/gabrielbarth/singu-fake-app">app</a> criado para simular a ferramenta da <a href="https://singu.com.br/">Singu</a>, o maior aplicativo de delivery de beleza do Brasil.

##  :computer: Documentação da API

|  Rota | Tipo da Requisição  |  Descrição  | 
|---|---|---|
| **/services**  | GET   | Lista todos os serviços de beleza disponíveis na plataforma. |
| **/services/category?category={value}**  | GET   | Lista todos os serviços de beleza para uma determinada categoria de serviços disponível na plataforma. |
| **/services**  | POST   | Cria um novo serviço de beleza. |
| **/services/{id}**  | DELETE   | Deleta um serviço de beleza da plataforma. |
| **/users**  | GET   | Lista todos os usuários cadastrados na plataforma. |
| **/users**  | POST   | Cria um novo usuário. |
| **/users/{id}**  | DELETE   | Deleta um usuário da plataforma. |


### Esta API foi publicada através da Amazon Elastic Compute Cloud (EC2) e para ter acesso a documentação e consumir os endpoints, basta acessar o link abaixo:
<h2 align="center">
  <a href="https://singu.singu-fake-backend.store/api-docs/">API DOCS</a>
</h2>

## Algumas ferramentas utilizadas:
- Mongoose e mongoDB;
- Swagger;
- Amazon EC2;
- pm2.


## Ideias futuras de PR
[  ] - Criar entidade, módulo e endpoints para ladies e appointments;

[  ] - Criar camada validations para validações do dados;

[  ] - Upload de imagens (avatar e serviços) com Amazon S3;

<p align="center">
  Made with ♥ by <a href="https://gabrielbarth.com/">Gabriel Barth</a>
</p>
