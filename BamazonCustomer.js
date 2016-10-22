var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "bwoodcock",
    password: "",
    database: "bamazon_db"
});

conn.connect(function(err) {
	if(err){
		console.log(err);
		throw err;
	}

	conn.query('SELECT * FROM products', function(err, res){
		if(err) throw err;
		console.log(res);
	})
})