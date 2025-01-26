module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  /* Book */

  //Salvar Autor de um livro
  saveAuthor(author) {
    this.#storage.authors.push(author);
  }
  //Encontrar livro pelo nome
  findBookByName(bookName) {
    console.log(`Procurando por: ${bookName}`);
    return this.#storage.books.find((b) => {
      console.log(`Comparando com: ${b.name}`);
      return b.name === bookName;
    });
  }

  //Salvar livro
  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) [this.#storage.books.push(book)];
  }

  //Adicionar livro ao estoque
  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addToStock(quantity);
  }

  //Remover livro do estoque
  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
  }

  /* Poster */

  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) [this.#storage.posters.push(poster)];
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addToStock(quantity);
  }

  removePostersFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeFromStock(quantity);
  }

  //Salvar Usuário
  saveUser(user) {
    const userExist = this.#storage.users.find((u) => u.email === user.email);
    if (!userExist) {
      this.#storage.users.push(user);
    }
  }

  //Salvar pedidos
  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  //Mostrar toda a base de dados
  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
