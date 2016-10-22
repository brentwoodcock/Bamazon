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
		console.log('ID Price($) Product                      ');
		console.log('-----------------------------------------');
		var i = 0;
		var products = [];
		// Display products for sale
		while (i < res.length){
			console.log(res[i].ItemID + '  ' + res[i].Price + '    ' + res[i].ProductName);
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
			// console.log(JSON.stringify(answers, null, '  '))

			conn.query('SELECT StockQuantity FROM products WHERE ProductName = ?', answers.product, function(err,res){
				if(err) throw err;
				if (res[0].StockQuantity < parseInt(answers.quantity)) {
					console.log("Sorry, not enough in stock");
				}else{
					console.log("Purchase successful!");
					conn.query('UPDATE products SET ? WHERE ?', [{
						StockQuantity: (res[0].StockQuantity - parseInt(answers.quantity))
					},{
						ProductName: answers.product
					}], function(err, res){
						if (err) throw err;
					})
				}
			})
		})
	});
})