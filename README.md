# Bookstore - Projeto Prático de POO em JavaScript

Este projeto foi desenvolvido para praticar conceitos de **Programação Orientada a Objetos (POO)** utilizando **JavaScript**. O sistema simula uma livraria, permitindo a criação e gerenciamento de usuários, livros, autores, posters e pedidos. O projeto abrange funcionalidades como a manipulação de estoque, o processo de pedidos e a organização dos dados em um banco de dados simulado.

## Funcionalidades

- **Gestão de Autores**: Criação e listagem de autores com nome, nacionalidade e biografia.
- **Gestão de Livros**: Criação e listagem de livros, com informações como título, sinopse, autor, preço e quantidade em estoque.
- **Gestão de Posters**: Criação e listagem de posters com informações sobre nome, descrição, preço e estoque.
- **Gestão de Usuários**: Criação e listagem de usuários, com dados como nome, e-mail e senha.
- **Pedidos**: Criação de pedidos de compra com produtos (livros e posters) e atualização do estoque após a compra.
- **Banco de Dados Simulado**: Armazenamento dos dados em memória, com a capacidade de exibir o conteúdo do banco.

## Tecnologias Utilizadas

- **JavaScript**: Lógica do sistema, incluindo manipulação de objetos e gerenciamento de dados.
- **Classes e POO**: Utilização de conceitos como herança, encapsulamento, associação, polimorfismo, entre outros.

## Como Rodar o Projeto

1. **Clone o Repositório**:

   Abra o terminal e execute o seguinte comando para clonar o repositório para a sua máquina:

   ```bash
   git clone git@github.com:DarllysonS/bookstore.git
   ```

2. **Instale as Dependências:**:

   Navegue até o diretório do projeto clonado e instale as dependências (caso haja algum package.json no repositório):

   ```bash
   cd bookstore
   npm install
   ```

3. **Execute o Projeto:**:

   O projeto não tem interface gráfica, sendo executado diretamente no terminal. Para rodar o projeto, execute o seguinte comando:

   ```bash
   npm index.js
   ```

   Esse comando irá executar as funcionalidades principais, como a criação de usuários, livros, autores, posters, e pedidos, além de exibir o banco de dados no terminal.
