window.onload = function () {
  // use the indexedDB global object to create the database.
  // indexedDB.open(dbName, dbVersion)

  var dbName = 'testdb';
  var dbVersion = 2;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  // Its triggered when a database is created or the version is changed
  // this is the place where we create the object stores, indexes and chains
  dbRequest.onupgradeneeded = function (event) {
    console.log('Upgrade needed');
  };

  dbRequest.onerror = function (event) {
    console.log('Error!');
    console.log(event.target.errorCode);
  };

  dbRequest.onsuccess = function (event) {
    console.log('Success');
    console.log(event.target.result);
  };

  // this event is triggered when the database is not available or cannot be used.
  dbRequest.onblocked = function (event) {
    console.log('Blocked');
  };
};
