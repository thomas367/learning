window.onload = function () {
  var isDbOpened = false;

  var dbName = 'library';
  var dbVersion = 1;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    var db = event.target.result;
    db.createObjectStore('books', {
      keyPath: 'isbn'
    });
  };

  dbRequest.onsuccess = function () {
    console.log('DB is successfully opened!')
    isDbOpened = true;
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!')
    isDbOpened = false;
  };


  $('#create-book-form').submit(function (event) {
    event.preventDefault();

    if (isDbOpened) {
      // Form Inputs
      var isbn = $('#isbn').val();
      var name = $('#name').val();
      var publication = $('#year').val();

      // Book Object
      var book = {
        isbn: isbn,
        name: name,
        publication: publication,
        createdAt: new Date().getTime()
      };

      // Handling Database
      var db = dbRequest.result;

      // Creating Transaction
      var transaction = db.transaction('books', 'readwrite');

      // Handling Object Store
      var store = transaction.objectStore('books');

      // Adding Object to Object Store
      var request = store.add(book);

      // Book is added
      request.onsuccess = function () {
        alert('Book is added!');
      };

      // Book is NOT added
      request.onerror = function () {
        alert('Book is NOT added!');
      };

    } else {
      alert('There is DB Problem!');
    }

  });
};
