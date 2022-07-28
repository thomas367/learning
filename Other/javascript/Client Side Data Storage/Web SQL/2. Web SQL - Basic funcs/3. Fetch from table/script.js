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

    // Retrieve Item from Table
    // SELECT * FROM logs
    database.transaction(function (t) {
        t.executeSql('SELECT logMessage FROM logs WHERE id="12"', [],
        function (transaction, results) {
            console.log(results.rows);
        },
        function (transaction, errors) {
            console.log('Item is NOT fetched!');
        }
        );
    });
};
