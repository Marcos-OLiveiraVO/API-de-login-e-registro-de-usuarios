

<h1> API de login e registro de usuarios </h1>
<h2>A ideia desse projeto foi criar uma api que teria funcionalidade de registrar novos usuarios,
e uma vez registrado eles teriam a opção de fazer Login.</h2>

<h2> Uma vez feito o registro do usuario, seria gerado um token e esse token seria verificado toda vez que ele
entrasse na pagina verificando se ele tem as permissões de admin ou se ele ja tinha feito o login. </h2>


  - <h2> Autentificação do usuario foi feita utilizando-se do JWT. </h2>
  - <h2> Validação do usuario foi feita com JOI. </h2>
  - <h2> A segurança da senha foi feita com criptografia utilizando-se do module Bcrypt. </h2>