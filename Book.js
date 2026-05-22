/**
 * Representa un libro en el sistema de gestión de la biblioteca.
 * @class Book
 * @example
 * const book = new Book('1984', 'Orwell', 1949);
 */
class Book {
  #title; #author; #publicationYear; #available;

  /**
   * @param {string} title - Título del libro
   * @param {string} author - Nombre del autor
   * @param {number} publicationYear - Año de publicación
   */
  constructor(title, author, publicationYear) {
    this.#title           = title;
    this.#author          = author;
    this.#publicationYear = publicationYear;
    this.#available       = true;
  }

  /** @returns {string} El título del libro */
  getTitle() { return this.#title; }

  /** @returns {string} El autor del libro */
  getAuthor() { return this.#author; }

  /** @returns {number} El año de publicación */
  getPublicationYear() { return this.#publicationYear; }

  /** @returns {boolean} true si disponible, false si prestado */
  isAvailable() { return this.#available; }

  /** @param {boolean} value - true para disponible, false para prestado */
  setAvailable(value) { this.#available = value; }
}

module.exports = Book;