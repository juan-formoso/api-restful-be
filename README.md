# API RESTful com Adonis

## Contexto 
Este repositório contém os códigos e arquivos desenvolvidos para o teste técnico da **Be**. O desafio consiste no desenvolvimento de um **CRUD** no formato de uma _API_ e criar _endpoints_ que irão ler e escrever em um banco de dados utilizando o **MySQL**.

Esta API segue os princípios REST. Nela, o usuário irá fazer o login e caso não tenha cadastro ainda, se cadastrar. Se a autenticação estiver correta e o usuário exista no banco de dados, irá criar um token de autorização e esterá permitido realizar operações envolvendo clientes e produtos.

## Seções
- [**Especificações do desafio**](#especificações-do-desafio-scroll)
- [**Tecnologias utilizadas**](#tecnologias-utilizadas-hammer)
- [**Rotas da aplicação**](#rotas-repeat)
- [**Iniciando a API**](#iniciando-a-api-arrow_forward)
- [**Realizando requisições**](#realizando-requisições-computer)

## Especificações do desafio :scroll:

## Tecnologias utilizadas :hammer:
> Node.js, Adonis, JWT, MySQL, ThunderClient

## Rotas :repeat:

### Autenticação
* `POST /signup`: Cadastro de usuário
* `POST /login`: Login do usuário

### Clientes
* `GET /clients`: Lista todos os clientes
* `GET /clients/:id`: Detalha um cliente específico e suas vendas
* `POST /clients/`: Adiciona um cliente
* `PUT /clients/:id`: Edita um cliente
* `DELETE /clients/:id`: Exclui um cliente e suas vendas

### Produtos
* `GET /products`: Lista todos os produtos
* `GET /products/:id`: Detalha um produto específico
* `POST /products`: Adiciona um produto
* `PUT /products/:id`: Edita um produto
* `DELETE /products/:id`: Exclui logicamente um produto

### Vendas
* `POST /sales`: Registra uma venda

## Iniciando a API :arrow_forward:
1. Clone o repositório:
    ```bash
    git clone git@github.com:juan-formoso/api-restful-be.git
    cd api-restful-be

2. Instale as dependências:
    ```bash
    npm install

3. Configure o banco de dados no arquivo `.env`.

    :wink: Dica: utilize o arquivo `.env.example` como referência!

4. Execute as migrations:
    ```bash
    adonis migration:run

5. Inicie o servidor:
    ```bash
    adonis serve --dev

## Realizando requisições :computer: