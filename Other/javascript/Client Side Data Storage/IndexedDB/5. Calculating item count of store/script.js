window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');

    // Handling Database
    var db = event.target.result;

    // Creating Transaction
    var transaction = db.transaction('books', 'readonly');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Calculating Items Count
    var request = store.count();

    request.onsuccess = function (event) {
      var itemsNum = event.target.result;
      $('#items-count').html(itemsNum);
    }

    request.onerror = function (event) {
      console.log('Count Function Not Working!');
    };

  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
