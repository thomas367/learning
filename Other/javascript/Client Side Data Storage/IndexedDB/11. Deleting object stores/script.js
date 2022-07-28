window.onload = function () {
  var dbName = 'library';
  var dbVersion = 3; // we need to increase the dbVersion when removing the object store since we're making a structural change.

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    var db = event.target.result;
    db.deleteObjectStore('books');
  };

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully opened!');
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT opened!');
  };
};
