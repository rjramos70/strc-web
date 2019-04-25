# strc-web

Prova de conceito de uma aplicação web em Angular que consumindo os serviços da API REST (strc).

<br>

## Guia de instalação

1. Fazer download do arquivo compactado do projeto.
2. Descompacte o arquivo.
3. Via terminal entre na pasta que acabou de ser descompactada.
4. Entrar na pasta que acabou de ser criada e executar o seguinte comando via terminal para instalar os pacotes:

    ```
    npm install 
    ```

5. Ao término da instalação, aida via terminal e dentro da pasta do projeto, execute o comando para iniciar a aplicação: 
   
    ```
    ng serve 
    ```

6. Para testar a aplicação, abra o navegado de sua preferência e acesse a URL 'http://localhost:4200'
<br>

## Interfaces

### Tela inicial

<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/tela_inicial.png?raw=true" width="80%" height="80%">
</p>

### Lista Funcionários

<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/lista_funcionarios.png?raw=true" width="80%" height="80%">
</p>

### Cadastra Funcionário

<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/create_funcionario.png?raw=true" width="80%" height="80%">
</p>

### Atualiza Funcionário

<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/update_funcionario.png?raw=true" width="80%" height="80%">
</p>

### Remove Funcionário

<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/delete_funcionario.png?raw=true" width="80%" height="80%">
</p>

### Pesquisa Funcionário

<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/tela_pesquisar1.png?raw=true" width="80%" height="80%">
</p>
<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/tela_pesquisar2.png?raw=true" width="80%" height="80%">
</p>
<p align="left">
  <img src="https://github.com/rjramos70/strc-web/blob/master/imgs/tela_pesquisar3.png?raw=true" width="80%" height="80%">
</p>

<br>

## Requisitos da Aplicação

Esta aplicação web tem os seguintes métodos implementados:

- Tela de inclusão de um funcionário, no qual quando o usuário preencher e clicar no botão 'Cadastrar, o formulário faz uma requisição POST para API Rest do projeto 'strc' criada para inserir um novo registro no banco de dados.
- Tela de pesquisa onde o usuário pode realizar, a escolha de filtros, pesquisa de funcionário(s), visualizando os resultado e uma lista de funcionários com as características desejadas logo abaixo do formulário de pesquisa. 
- Na tela de listagem de funcionários, podemos direcionar para a tela de cadastro, quando a lista estiver vazia, caso contrário temos as opções de 'Edit' e 'Delete'. 
<br>

## Linguagem de programação

Esta APi foi desenvolvida com Node utilizando os seguintes pacotes:

* Pacote Angular 7
* bootstrap 4.3.1
* core-js 2.5.4
* jquery 3.4.0
* node-rest-client 3.1.0
* popper 1.0.1
* rxjs 6.3.3
* tslib 1.9.0
* zone.js 0.8.26

<br>


## Autoria e contribuições

**Renato Jiquiriçá Ramos**, professional com mais de 17 anos de experiência no setor de TI, com foco em Analista e Desenvolvedor de sistemas confiáveis, escaláveis e funcionais, visando ajudar as empresas a serem bem-sucedidas em seus negócios.

