const Library = require('./Library');

const lib = new Library();
lib.add('Don Quijote', 'Cervantes', 1605);
lib.add('1984', 'Orwell', 1949);
lib.add('Clean Code', 'Martin', 2008);

lib.printAll();

lib.addBook()