var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jugos_ventas'
});

connection.connect();

connection.query('SELECT * from facturas', function(err, rows, fields) {
    if(err) throw err;
    console.log(rows);
})