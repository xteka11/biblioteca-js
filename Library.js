const Book = require('./Book');

const ANCIENT_YEAR_LIMIT = 1900;
const MODERN_YEAR_LIMIT  = 2000;

/**
 * Gestiona una colección de libros.
 * @class Library
 */
class Library {
  #books = [];

  /**
   * Añade un libro a la biblioteca.
   * @param {string} title - Título del libro
   * @param {string} author - Nombre del autor
   * @param {number} year - Año de publicación
   */
  addBook(title, author, year) {
    this.#books.push(new Book(title, author, year));
  }

  /**
   * Devuelve todos los libros.
   * @returns {Book[]} Lista de libros
   */
  getBooks() { return this.#books; }

  /**
   * Devuelve la etiqueta de categoría según el año.
   * @param {Book} book - El libro a categorizar
   * @returns {string} Etiqueta de categoría
   */
  getCategoryLabel(book) {
    if (book.getPublicationYear() < ANCIENT_YEAR_LIMIT) return '[ANTIGUO] ';
    if (book.getPublicationYear() < MODERN_YEAR_LIMIT)  return '[SIGLO XX] ';
    return '[MODERNO] ';
  }

  /**
   * Imprime todos los libros por consola.
   */
  printAll() {
    this.#books.forEach(book => {
      const label = this.getCategoryLabel(book);
      console.log(label + book.getTitle() + ' - ' + book.getAuthor());
      if (!book.isAvailable()) console.log('  -> No disponible');
    });
  }

  /**
   * Presta un libro por título.
   * @param {string} title - Título del libro a prestar
   * @returns {boolean} true si se prestó, false si no está disponible
   */
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