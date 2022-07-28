window.onload = function () {
  var dbName = 'testdb';
  var dbVersion = 5;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  // we write our queries on onsuccess
  dbRequest.onsuccess = function (event) {
    console.log('Success');

    // Handling Database
    var db = event.target.result;

    /**
     * Creating Transaction
     * db.transaction(storeName(s), mode)
     * storeNames -> "storeName" or ["storeName1", "storeName2"]
     * We can assign single or multiple store names
     * 
     * Mode -> "readonly" or "readwrite" or "versionchange"
     * readonly - can only read data from object store
     * readwrite - transaction is allowed to read, write, delete and modify data
     * versionchange - same functionality as read write but in addition can change indexes, delete object stores and more
     * 
     */

    var trans = db.transaction('books', 'readwrite');

    // Handling Object Store
    var store = trans.objectStore('books');

    store.add({
      id: 5,
      name: "test"
    })

    console.log(store);
  };
};
