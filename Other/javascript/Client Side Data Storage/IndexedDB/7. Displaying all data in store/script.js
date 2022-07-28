window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');

    // Handling Database
    var db = dbRequest.result;

    // Creating Transaction
    var transaction = db.transaction('books', 'readonly');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Fetch All Data from Object Store
    var request = store.getAll();

    request.onsuccess = function (event) {
      var items = event.target.result;
      displayBooks(items);
    };

    request.onerror = function () {
      console.log('Error');
    };


  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };

  function displayBooks(items) {
    $('#books-list').html('');

    for (var i = 0; i < items.length; i++) {
      var book = '<li class="list-group-item d-flex justify-content-between align-items-center">';
      book += items[i].name + ' - ' + items[i].isbn
      book += '<span class="badge badge-primary badge-pill">' + items[i].publication + '</span>';
      book += '</li>';
      $('#books-list').append(book);
    }
  }
};
