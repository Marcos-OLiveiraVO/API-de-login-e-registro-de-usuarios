

<h1> Sistema de login e registro de usuarios </h1>

## :memo: Descrição
A ideia desse projeto foi criar uma API que teria funcionalidade de registrar novos usuarios,
e uma vez registrado o usuario teria a opção de fazer Login.

Este é um sistema de login e registro de usuários que dá as boas-vindas a novos usuários. Ele permite que os usuários criem suas próprias contas e façam login no sistema para acessar determinadas funcionalidades ou recursos. Se você ainda não tem uma conta, pode se registrar de forma fácil e rápida para começar a usufruir dos benefícios do sistema.


 Um sistema de login e registro onde o usuário se registraria com seu email, senha e nome e então teria
a opção de fazer login inserindo apenas o nome e a senha correspondente, Nesse projeto fui capaz de conhecer mais sobre a segurança em relação aos dados do cliente.

 Uma vez feito o registro do usuario, seria gerado um token e esse token seria verificado toda vez que ele
entrasse na pagina verificando se ele tem as permissões de admin ou se ele ja tinha feito o login. 

  - <h5> Autenticação do usuario foi feita utilizando-se do JWT. </h5>
  - <h5> Validação do usuario foi feita com JOI. </h5>
  - <h5> A segurança da senha foi feita com criptografia utilizando-se do module Bcrypt. </h5>

## :books: Funcionalidades
  - Registrar Usuario
  - Login de Usuario

## :wrench: Tecnologias utilizadas
<h5>Nesse Projeto foi utilizado das Seguintes Tecnologias : </h5>


    -  Com o padrão de arquitetura MVC (Model-view-controller)
    -  Node.js
    -  Express
    -  JWT
    -  Joi
    -  MongoDB
    -  Bcrypt



