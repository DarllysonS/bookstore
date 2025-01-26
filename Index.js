const App = require("./App");

const app = new App();

//Criando e listando autores
app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");
const authors = app.getAuthors();

//Criando e listando livros
app.createBook("O Hobbit", "...", "fantasy", 300, authors[0], "...", 19.99, 100);
app.createBook("A Sociedade do Anel", "...", "fantasy", 400, authors[0], "...", 24.99, 100);
app.createBook("O Ladrão de Raios", "...", "fantasy", 500, authors[1], "...", 24.99, 100);
app.createBook("A Pirâmide Vermelha", "...", "fantasy", 600, authors[1], "...", 24.99, 100);
const books = app.getBooks();

//Criando e listando usuários
app.createUser("Darllyson Santos", "darllyson.santos11@gmail.com", "123456");
const users = app.getUsers();

//Mostrando Base de dados inicial
app.showDatabase();

//Salvando itens na variável
const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
];
app.createOrder(items, users[0]);

//Mostrando Base de dados após inserir pedidos
app.showDatabase();
