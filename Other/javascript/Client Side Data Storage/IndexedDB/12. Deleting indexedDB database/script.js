window.onload = function () {
  var dbName = 'library';

  var dbRequest = indexedDB.deleteDatabase(dbName);

  dbRequest.onsuccess = function (event) {
    console.log('DB is successfully REMOVED :(');
  };

  dbRequest.onerror = function () {
    console.log('DB is NOT REMOVED :)');
  };
};
