window.onload = function () {
  var dbName = 'testdb';
  var dbVersion = 3;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  // We need to create the object store inside this function
  // tables are the object store in our indexedDB
  dbRequest.onupgradeneeded = function (event) {
    console.log('Upgrade Needed');
    var db = event.target.result;

    // db.createObjectStore(storeName, options);
    // Primary Key

    db.createObjectStore('books', {
      keyPath: 'id', // primary key, prevents object with the same properties
      autoIncrement: true
    });
  }
};
