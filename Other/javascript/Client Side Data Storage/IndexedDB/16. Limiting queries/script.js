window.onload = function () {
  var dbName = 'library';
  var dbVersion = 4;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    var db = event.target.result;
    db.createObjectStore('books', {
      keyPath: 'isbn'
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

    var cursorRequest = store.openCursor();

    // pagination
    var LIMIT = 15;
    var OFFSET = 20;
    var i = 0;

    cursorRequest.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        if (i < LIMIT + OFFSET) {
          if (i >= LIMIT) {
            console.group('Object');
            console.log(i + 1);
            console.log(cursor.value);
            console.groupEnd();
          }
          cursor.continue();
          i++;
        }
      } else {
        console.log('All items are listed');
      }
    };
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
