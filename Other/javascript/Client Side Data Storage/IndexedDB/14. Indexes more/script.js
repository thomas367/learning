window.onload = function () {
  var dbName = 'library';
  var dbVersion = 3;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    /**
     * var db = event.target.result;
     * var store = db.createObjectStore('books', { keyPath: 'isbn' });
     * store.createIndex('by_author', 'author', { unique: false });
     */

    var store = dbRequest.transaction.objectStore('books');

    // deleting an index since its a structural change we need to update the version too.
    store.deleteIndex('by_author');
  };

  dbRequest.onsuccess = function () {
    console.log('DB is successfully opened!');

    // Handling Database
    var db = dbRequest.result;

    // Creating Transaction
    var transaction = db.transaction('books', 'readwrite');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Handling Index Wrapper
    var index = store.index('by_author');

    console.log(index);

    // Handling Specific Author
    var author = 'Eric A. Meyer';
    var getEric = index.getAll(author);

    getEric.onsuccess = function (event) {
      console.log(event.target.result);
    }

    // Handling Specific Author Books Count
    var author = 'Eric A. Meyer';
    var getEric = index.count(author);

    getEric.onsuccess = function (event) {
      console.log(event.target.result);
    }

    // Handling Object Keys
    var author = 'Eric A. Meyer';
    var getEric = index.getAllKeys(author);

    getEric.onsuccess = function (event) {
      console.log(event.target.result);
    }

  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
