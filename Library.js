const Book = require('./Book');

class Library {
  constructor() {
    this.books = [];
  }

  add(t, a, y) {
    this.books.push(new Book(t, a, y));
  }

  printAll() {
    this.books.forEach(b => {
      if (b.y < 1900) {
        console.log('[ANTIGUO] '  + b.t + ' - ' + b.a);
      } else if (b.y >= 1900 && b.y < 2000) {
        console.log('[SIGLO XX] ' + b.t + ' - ' + b.a);
      } else {
        console.log('[MODERNO] '  + b.t + ' - ' + b.a);
      }
      if (!b.av) console.log('  -> No disponible');
    });
  }

  lend(t) {
    for (let b of this.books) {
      if (b.t === t && b.av) {
        b.av = false;
        return true;
      }
    }
    return false;
  }
}

module.exports = Library;