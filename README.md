# API RESTful com Adonis

## Contexto 
Este repositório contém os códigos e arquivos desenvolvidos para o teste técnico da **Be**. O desafio consiste no desenvolvimento de um **CRUD** no formato de uma _API_ e criar _endpoints_ que irão ler e escrever em um banco de dados utilizando o **MySQL**.

Esta API segue os princípios REST. Nela, o usuário irá fazer o login e caso não tenha cadastro ainda, se cadastrar. Se a autenticação estiver correta e o usuário exista no banco de dados, irá criar um token de autorização e esterá permitido realizar operações envolvendo clientes, produtos e vendas.

## Seções
- [**Especificações do desafio**](#especificações-do-desafio-scroll)
- [**Tecnologias utilizadas**](#tecnologias-utilizadas-hammer)
- [**Rotas da aplicação**](#rotas-repeat)
- [**Iniciando a API**](#iniciando-a-api-arrow_forward)
- [**Realizando requisições**](#realizando-requisições-computer)
- [**Informações úteis**](#informações-úteis-heavy_plus_sign)

## Especificações do desafio :scroll:
### Banco de dados
Estrutura mínima:
* usuários: email e senha.
* clientes: nome e cpf.
* endereço: campos comuns de endereço.
* telefones: cliente e número.
* produtos: preço e demais campos.
* vendas: cliente, produto, quantidade, preço unitário, preço total, data e hora.
### Rotas do sistema
* cadastro de usuário do sistema (signup).
* login com JWT de usuário cadastrado (login).
* clientes:
    > listar todos os clientes cadastrados (index); apenas dados principais; ordenar pelo id.

    > detalhar um(a) cliente e vendas a ele(a) (show); trazer as vendas mais recentes primeiro; possibilidade de filtrar as vendas por mês + ano;

    > adicionar um(a) cliente (store);
    
    > editar um(a) cliente (update);
    
    > excluir um(a) cliente e vendas a ele(a) (delete);

* produtos:
    > listar todos os produtos cadastrados (index); apenas dados principais devem vir aqui; ordenar alfabeticamente.
    
    > detalhar um produto (show);

    > criar um produto (store);
    
    > editar um produto (update);
    
    > exclusão lógica ("soft delete") de um produto (delete);

* vendas:
    > registrar venda de 1 produto a 1 cliente (store).

:warning: **Observação**: as rotas em clientes, produtos e vendas só devem ser acessadas por usuários logados.

### Requisitos básicos
- [x] estruturar o sistema observando o MVC (porém, sem as views).

- [x] usar MySQL como banco de dados.

- [x] respostas em JSON.

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
Esta seção detalha como interagir com as rotas da API e enviar dados pelo Cabeçalho e Corpo da requisição.

### Headers Comuns
Todas as requisições que necessitam de autenticação devem incluir o token JWT no cabeçalho da seguinte forma:
```
Authorization: Bearer <token-jwt>
Content-Type: application/json
```

### Endpoints e exemplos de requisições
1. Cadastro de Usuário
**Rota**: `POST /signup`
```json
{
    "email":"usuario@exemplo.com",
    "password":"senha123"
}
```
2. Login de Usuário
**Rota**: `POST /login`
```json
{
    "email":"usuario@exemplo.com",
    "password":"senha123"
}
```
3. Listar Clientes
**Rota**: `GET /clients`

4. Detalhar um Cliente
**Rota**: `GET /clients/:id`




## Informações úteis :heavy_plus_sign:
Referências utilizadas por mim durante o projeto:

- [Documentação Adonis](https://docs.adonisjs.com/guides/getting-started/installation)
- [Documentação git](https://git-scm.com/book/en/v2)
- [Documentação MySQL](https://dev.mysql.com/doc/workbench/en/)

* Controllers estão em `/app/Controllers/Http`.
* Models estão em `/app/Models`.
* Arquivo de configuração do JWT está em `config/auth.js`.
* Scripts de migração do DB estão em `/database/migrations`.
* Rotas da API estão em `/start/routes.js`.
