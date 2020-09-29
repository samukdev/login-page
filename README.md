<h1>Login Page</h1>

<img src=""></img>
<img src=""></img>


Nesse projeto utilizei HTML,CSS e Javascript junto ao Bulma e ao VueJS para desenvolver uma página de login com foco na expêriencia do usuário.
Optei por um design minimalista com cores mais leves, dando enfase aos botões principais usando o vermelho no botão de entrar, e as cores das respectivas marcas nos botões de entrar utilizando Google e Facebook. A página é totalmente responsiva, para pequenas, médias e grandes telas.


Utilizei o VueJS para a validação do login, retornando mensagens personalizadas para cada erro, visando o melhor entendimento do usuário para resolver os problemas na autenticação.
As seguintes mensagens são possíveis na autenticação:
<ul>
  <li>'Por favor, insira seu email'</li>
  <li>'Por favor, insira sua senha'</li>
  <li>'Ops! Formato inválido, confira o email e tente novamente' (Ao inserir um formato inválido de e-mail)</li>
  <li>'Parece que você ainda não está cadastrado :(' (Quando o email não está no array de usuários)</li>
  <li>'Senha incorreta'</li>
  
</ul>

<p> Além disso, mais um ponto visando a expêriencia do usuário, é o botão 'mostrar senha' que facilita bastante na hora de conferir se a senha foi digitada corretamente, especialmente em dispositivos touch com telas menores, onde a digitação tende um pouco mais a erros.</p>

Utilizei um array de objetos com os usuários para simular um banco de dados. Há dois usuários cadastrados:
{email:'admin@admin.com', password: 'admin'} <br>
{email:'manager@manager.com', password: 'manager'}


Os botões de esqueci minha senha e logar com redes sociais não possuem função já que a página não possui um banco de dados até então.

É isso, espero que gostem :D
