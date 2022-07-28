window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    var db = event.target.result;
    var store = db.createObjectStore('books', {
      keyPath: 'isbn'
    });

    // store.createIndex(indexName, keyPath, options)
    // unique or multientry - creates a combination of index as array.
    store.createIndex('by_author', 'author', {
      unique: false
    });
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

    // Handling Specific Author
    var author = 'Eric A. Meyer';
    var getEric = index.getAll(author);

    getEric.onsuccess = function (event) {
      console.log(event.target.result);
    }
    /**
     * Handling Database
     * var db = dbRequest.result;
     *
     * Creating Transaction
     * var transaction = db.transaction('books', 'readwrite');
     *
     * Handling Object Store
     * var store = transaction.objectStore('books');
     */
    
    // for(var i = 0; i < 10; i++){
    //   store.add({isbn: '1449358381' + i, name: 'CSS and Documents' + i, author: 'Eric A. Meyer' + i});
    // }
    
    
    /**
     * store.add({isbn: '1118206916', name: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett'});
     * store.add({isbn: '1449358381', name: 'CSS and Documents', author: 'Eric A. Meyer'});
     * store.add({isbn: '1491918012', name: 'CSS: The Missing Manual', author: 'David Sawyer McFarland'});
     * store.add({isbn: '1430219327', name: 'AdvancED CSS', author: 'Joe Lewis'});
     * store.add({isbn: '0764597906', name: 'Accessible XHTML and CSS Web Sites: Problem - Design - Solution', author: 'Jon Duckett'});
     * store.add({isbn: '1449397255', name: 'CSS: The Definitive Guide: The Definitive Guide', author: 'Eric A. Meyer'});
     * store.add({isbn: '0735714258', name: 'More Eric Meyer on CSS', author: 'Eric A. Meyer'});
     */
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
