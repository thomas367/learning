window.onload = function () {
  var dbName = 'library';
  var dbVersion = 4;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    var db = event.target.result;
    var store = db.createObjectStore('books', {
      keyPath: 'isbn'
    });
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

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        console.log(cursor.value);
        cursor.continue();
      } else {
        console.log('All items are listed!');
      }
    };

    var cursorKeyRequest = store.openKeyCursor();

    cursorKeyRequest.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        console.log(cursor);
        cursor.continue();
      } else {
        console.log('All keys are listed!');
      }
    };

    var cursorIndexRequest = index.openCursor();

    cursorIndexRequest.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        console.log('Index Cursor : ' + cursor.value);
        cursor.continue();
      } else {
        console.log('All items are listed!');
      }
    };

    var cursorIndexKeyRequest = index.openKeyCursor();

    cursorIndexKeyRequest.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        console.log('Index key cursor ' + cursor);
        if (cursor.key % 2 == 0) {
          // do something
        }
        cursor.continue();
      } else {
        console.log('All keys are listed!');
      }

    };

  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
