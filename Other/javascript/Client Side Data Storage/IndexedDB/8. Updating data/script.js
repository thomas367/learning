window.onload = function () {
  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };

  $('#fetch-book-button').click(function (event) {
    var isbn = $('#isbn-input-box').val();

    if (isbn) {
      fetchBook(isbn);
    } else {
      alert('Please enter an isbn!');
    }
  });

  $('#update-book-button').click(function (event) {
    event.preventDefault();

    var isbn = $('#isbn').val();
    var name = $('#name').val();
    var publication = $('#year').val();

    var book = {
      isbn: isbn,
      name: name,
      publication: publication,
      updatedAt: new Date().getTime()
    };

    updateBook(book);
  });

  function fetchBook(isbn) {

    // Handling Database
    var db = dbRequest.result;

    // Creting Transaction
    var transaction = db.transaction('books', 'readonly');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Retrieve Object
    var request = store.get(isbn);

    request.onsuccess = function (event) {
      var book = event.target.result;

      if (book) {
        fillUpdateForm(book);
      } else {
        alert('There is no book with this ISBN!');
      }
    };
  }

  function fillUpdateForm(book) {
    $('#isbn').val(book.isbn);
    $('#name').val(book.name);
    $('#year').val(book.publication);
  }

  function updateBook(book) {
    // Handling Database
    var db = dbRequest.result;

    // Creting Transaction
    var transaction = db.transaction('books', 'readwrite');

    // Handling Object Store
    var store = transaction.objectStore('books');

    // Update Object
    // the id of the object should be the same for the update
    var request = store.put(book);

    request.onsuccess = function () {
      alert('The object is Updated!')
    };
  }
};
