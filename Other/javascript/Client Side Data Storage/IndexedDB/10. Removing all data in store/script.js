window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');

    // Handling Database
    var db = dbRequest.result;

    // Creating Transaction
    var transaction = db.transaction('books', 'readwrite');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Removing All Objects
    var request = store.clear();

    request.onsuccess = function () {
      alert('All objects are removed :(');
    };
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
