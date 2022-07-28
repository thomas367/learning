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

    // IDBKeyRange.only(key)
    // IDBKeyRange.lowerBound(key, [open=false])
    // IDBKeyRange.lowerBound(key, true)
    // IDBKeyRange.upperBound(key, [open=false])
    // IDBKeyRange.bound(lowerKey, upperKey, [open=false], [open=false])

    var range = IDBKeyRange.bound("11182069161036", "11182069161085", true, true);


    var cursorRequest = store.openCursor(range);

    cursorRequest.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        console.log(cursor);
        cursor.continue();
      } else {
        console.log('All items are listed!');
      }
    };
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
