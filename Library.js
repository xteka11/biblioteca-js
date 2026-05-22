const Book = require('./Book');

const ANCIENT_YEAR_LIMIT = 1900;
const MODERN_YEAR_LIMIT  = 2000;

class Library {
  #books = [];

  addBook(title, author, year) {
    this.#books.push(new Book(title, author, year));
  }

  getBooks() { return this.#books; }

  getCategoryLabel(book) {
    if (book.getPublicationYear() < ANCIENT_YEAR_LIMIT) return '[ANTIGUO] ';
    if (book.getPublicationYear() < MODERN_YEAR_LIMIT)  return '[SIGLO XX] ';
    return '[MODERNO] ';
  }

  printAll() {
    this.#books.forEach(book => {
      const label = this.getCategoryLabel(book);
      console.log(label + book.getTitle() + ' - ' + book.getAuthor());
      if (!book.isAvailable()) console.log('  -> No disponible');
    });
  }

  lend(title) {
    for (const book of this.#books) {
      if (book.getTitle() === title && book.isAvailable()) {
        book.setAvailable(false);
        return true;
      }
    }
    return false;
  }
}
module.exports = Library;