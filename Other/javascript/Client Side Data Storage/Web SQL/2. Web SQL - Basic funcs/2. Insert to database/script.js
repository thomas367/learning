window.onload = function () {
    var MB = 1024 * 1024;

    // Creating Database
    var database = openDatabase('localdb', '1.0', 'Local test database', 5 * MB, function (db) {
        console.log('DB is created!');
    });

    // Creating Table
    database.transaction(function (t) {
        t.executeSql('CREATE TABLE IF NOT EXISTS logs (id, logMessage)', [],
        function (transaction, results) {
            console.log('Table is created!');
        },
        function (transaction, errors) {
            console.log('Table is NOT created!');
        }
        );
    });

    // Adding New Record to Table
    var id = 12;
    var msg = "this is dynamic message variable bla bla";
    database.transaction(function (t) {
        t.executeSql('INSERT INTO logs (id , logMessage) VALUES ("' + id + '", "' + msg + '" )',
        [],
        function (transaction, results) {
            console.log('Record is added!');
        },
        function (transaction, errors) {
            console.log('Record is NOT added!');
        }
        );
    });
};
