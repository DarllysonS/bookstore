const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const User = require("./entities/USer");

module.exports = class App {
  static #database = new Database();

  //Criando usuário
  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }
  //Listando usuários
  getUsers() {
    return App.#database.find("users");
  }

  //Criando Author
  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }
  //Listando autores
  getAuthors() {
    return App.#database.find("authors");
  }

  //Criando Livros
  createBook(title, synopsis, genre, pages, author, description, price, inStock) {
    const book = new Book(title, synopsis, genre, pages, author, description, price, inStock);
    App.#database.saveBook(book);
  }
  //Listando livros
  getBooks() {
    return App.#database.find("books");
  }

  //Criando Poster
  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.savePoster(poster);
  }
  //Adicionando Poster
  addPoster(posterName, quantity) {
    return App.#database.addPostersToStock(posterName, quantity);
  }
  //Listando Poster
  getPoster() {
    return App.#database.find("posters");
  }

  //Criando pedido
  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity);
      }
    });
  }
  //Listando pedidos
  getOrders() {
    return App.#database.find("orders");
  }

  //Mostrar todo meu banco de dados
  showDatabase() {
    App.#database.showStorage();
  }
};
