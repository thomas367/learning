window.onload = function () {
    // openDatabase(dbname, dbversion, dbdescription, dbsize, callback)
    // transaction(callback)
    // executeSql(SQLText)

    var MB = 1024 * 1024; // 1MB

    // create Database
    var database = openDatabase('test', '1', 'it is test db', 5 * MB, function (db) {
        console.log('Database is created successfully!');
    });

    // create table
    database.transaction(function (t) {
        t.executeSql('CREATE TABLE users (id, name, lastname)');
    });
};
