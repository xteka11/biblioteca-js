class Book {
  #title; #author; #publicationYear; #available;

  constructor(title, author, publicationYear) {
    this.#title           = title;
    this.#author          = author;
    this.#publicationYear = publicationYear;
    this.#available       = true;
  }

  getTitle()           { return this.#title; }
  getAuthor()          { return this.#author; }
  getPublicationYear() { return this.#publicationYear; }
  isAvailable()        { return this.#available; }
  setAvailable(value)  { this.#available = value; }
}
module.exports = Book;