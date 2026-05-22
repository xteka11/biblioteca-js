const Library = require('./Library');

describe('Library', () => {
  let library;

  beforeEach(() => {
    library = new Library();
    library.addBook('Don Quijote', 'Cervantes', 1605);
    library.addBook('1984', 'Orwell', 1949);
    library.addBook('Clean Code', 'Martin', 2008);
  });

  test('addBook incrementa la coleccion', () => {
    const before = library.getBooks().length;
    library.addBook('Nuevo', 'Autor', 2020);
    expect(library.getBooks().length).toBe(before + 1);
  });

  test('lend devuelve true si disponible', () => {
    expect(library.lend('1984')).toBe(true);
  });

  test('lend devuelve false si ya prestado', () => {
    library.lend('1984');
    expect(library.lend('1984')).toBe(false);
  });

  test('lend devuelve false si no existe', () => {
    expect(library.lend('Inexistente')).toBe(false);
  });

  test('libros disponibles por defecto', () => {
    library.addBook('Test', 'Autor', 2000);
    const books = library.getBooks();
    expect(books[books.length - 1].isAvailable()).toBe(true);
  });

  test('printAll no lanza excepciones', () => {
    expect(() => library.printAll()).not.toThrow();
  });
});