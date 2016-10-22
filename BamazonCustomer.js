var mysql = require('mysql');
var inquirer = require('inquirer');

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
		console.log('ID   Product               Price($)');
		console.log('---------------------------------------------');
		var i = 0;
		var products = [];
		// Display products for sale
		while (i < res.length){
			console.log(res[i].ItemID + '    ' + res[i].ProductName + '    ' + res[i].Price);
			products.push(res[i].ProductName);
			i++;
		}
		// Prompt user for their product choice
		inquirer.prompt([
			{
				type: 'list',
				name: 'product',
				message: 'Which product would you like to buy?',
				choices: products
			},{
				type: 'input',
				name: 'quantity',
				message: 'How many would you like to purchase?'
			}
		]).then(function(answers) {
			console.log(JSON.stringify(answers, null, '  '))
		})
	});
});