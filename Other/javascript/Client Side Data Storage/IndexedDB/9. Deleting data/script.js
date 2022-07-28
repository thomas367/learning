window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');
    fetchBooks();
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };

  function fetchBooks() {
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
  }

  function displayBooks(items) {
    $('#books-list').html('');

    for (var i = 0; i < items.length; i++) {
      var book = '<li class="list-group-item d-flex justify-content-between align-items-center">';
      book += items[i].name + ' - ' + items[i].isbn
      book += '<span><button data-isbn="' + items[i].isbn + '" type="button" class="btn btn-danger">Delete</button></span>';
      book += '</li>';
      $('#books-list').append(book);
    }
  }

  $('#books-list').on('click', 'li button', function (event) {
    var isbn = $(this).data('isbn');

    if (confirm('Are you sure to delete this object?')) {
      deleteBook(isbn);
    }

  });

  function deleteBook(isbn) {
    // Handling Database
    var db = dbRequest.result;

    // Creating Transaction
    var transaction = db.transaction('books', 'readwrite');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Delete Object from Object Store
    var request = store.delete(isbn.toString());

    request.onsuccess = function () {
      alert('The object is removed!');
      fetchBooks();
    };
  }
};
