window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
    isDbOpened = false;
  };

  $('#fetch-book-button').click(function (event) {
    var isbn = $('#isbn-input-box').val();

    if (isbn) {
      fetchBook(isbn);
    } else {
      alert('Please enter an isbn number!');
    }
  });

  function fetchBook(isbn) {
    // Handling Database
    var db = dbRequest.result;

    // Creating Transaction
    var transaction = db.transaction('books', 'readonly');

    // Handlin Object Store
    var store = transaction.objectStore('books');

    // Fetching Object from Object Store
    var request = store.get(isbn);

    request.onsuccess = function (event) {
      var book = event.target.result;

      if (book) {
        updateBookBlock(book);
      } else {
        alert('No result found');
      }
    };

    request.onerror = function () {
      console.log('Error');
    };
  }

  function updateBookBlock(book) {
    $('#book-name').html(book.name);
    $('#isbn').html(book.isbn);
    $('#publication').html(book.publication);
  }
};
