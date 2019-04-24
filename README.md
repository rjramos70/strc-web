# strc-web

Prova de conceito de uma aplicação web em Angular que consumindo os serviços da API REST (strc).

<br>

## Guia de instalação

1. Fazer download do arquivo compactado do projeto.
2. Descompacte o arquivo.
3. Via terminal entre na pasta que acabou de ser descompactada.
4. Execute o comando: 
    ```
    npm install
    ```
<br>

## Como executar

1. Via terminal acesse a pasta do projeto após a instalação.
2. Execute o comando: 
    ```
    ng serve 
    ```
3. Abra o navegado de sua preferência e acesse a URL 'http://localhost:4200'
<br>

## Interfaces

### Tela inicial

<p align="left">
  <img src="https://raw.githubusercontent.com/rjramos70/POC-PU/master/WebContent/images/tela_lista_ofertas_disponiveis.png" width="80%" height="80%">
</p>

### Lista Funcionários

### Cadastra Funcionário

### Atualiza Funcionário

### Remove Funcionário

<br>

## Requisitos da API

Esta API tem os seguintes métodos implementados:

- GET

    - listAll: método que retorna a lista de todos os funcionários cadastrados.
    - getById: método que retorna o funcioário com base no ID passado como parametro na URL.


- PUT

    - update: método que atualizado o funcioário com base no ID passado como parâmetro na URL, além de nome, idade e cargo passado no corpo da requisição.


- POST  

    - create: método responsável pela criação do funcionário, onde no corpo da requisição devemos enviar os campos nome, idade e cargo.


- DELETE

    - delete: métdo que remove o funcionário com base no ID passado na URL. 
<br>

**OBSERVAÇÃO**: _Como se trata de uma POC, não foi implementado criptografia e nem camada de autenticação._
<br>
<br>

## Linguagem de programação

Esta APi foi desenvolvida com Node utilizando os seguintes pacotes:

* body-parser : 1.18.3
* consign : 0.1.6
* cors :  2.8.5
* express :  4.16.4
* mongoose :  5.5.2
* nodemon :  1.18.11 
<br>

## Melhorias Futuras na API

1. Implementação da camada de autenticação com pacote 'jsonwebtoken'.
2. Implementação de criptografia com o pacote 'bcryptjs'.
3. Implementação da camada de persistência com 'sequelize'.
<br>

## Autoria e contribuições

**Renato Jiquiriçá Ramos**, professional com mais de 17 anos de experiência no setor de TI, com foco em Analista e Desenvolvedor de sistemas confiáveis, escaláveis e funcionais, visando ajudar as empresas a serem bem-sucedidas em seus negócios.














## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
