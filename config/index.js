var inquirer = require('inquirer');

// format console log output
var chalk = require('./chalk.js');
// format and declare function with imported json-table module
var printTable = require('./printTable.js');
// product sql functions
var products = require('./products');

// print entire inventory to console
function printInventory() {
	products.selectAll(function(products) { // select all the products from the database
		printTable(products); // print result to console
		promptUser(products,'ItemID'); // callback function
	});
}

// prompt the user which item id they would like to purchase
function promptItemID(products) {
	// console log the prompt with custom ask style function
	chalk.prompt('Enter Item ID of the product you would like to buy:');
	// inquirer console log prompt
	inquirer.prompt([
		{
			type:'input',
			name:'ItemID',
			message:'ItemID:'
		}
	]).then(function(input) {
		// check each product for the ItemID from inquirer
		for (var i = 0; i < products.length; i++) {
			// declare the last product in the object to exit on no match
			var lastProduct = products.length - 1;
			// callback function if there is a matching ID in database
			if (products[i].ItemID == input.ItemID) {
				// restart the prompt to ask stock quanity
				printTable(products[i]);
				promptUser(products[i],'StockQuantity');
				// exit for loop on match
				i = products.length;
			} else if (i === lastProduct) {
				// console log error with custom style function
				chalk.error('ERROR: NO "Product" WITH AN "ItemID" of '+input.ItemID+' EXSISTS');
				// restart the prompt for item id
				promptUser(products,'ItemID');
			}
		}
	});
} // END: promptItemID()

// prompt user how many of the product they would like to purchase
function promptStockQuantity(product) {
	// console log the prompt with custom ask style function
	chalk.prompt('Enter the quantity you would like to purchase:');
	// inquirer console log prompt
	inquirer.prompt([
		{
			type:'input',
			name:'StockQuantity',
			message:'Quantity:'
		}
	]).then(function(input) {
			// check to make sure there is enough stock
			if (input.StockQuantity <= product.StockQuantity) {
				// set the new stock quatity
				var StockQuantity = product.StockQuantity - input.StockQuantity;
				// update the stock quantity
				products.updateStock(product.ItemID,StockQuantity);
				// console log the receipt and restart the prompt to ask if the user wants to make another purchase
				console.log('\nReceipt\nProduct:  '+product.ProductName+'\nPrice:    '+product.Price+'\nQuantity: '+input.StockQuantity+'\n----------\nTotal:    '+(product.Price*input.StockQuantity).toFixed(2));
				promptUser(null,'AnotherPurchase');
			} else {
				// console log error with custom style function
				chalk.error('ERROR: THE STORE DOES NOT HAVE ENOUGH STOCK TO MEET YOUR DEMAND');
				// restart the prompt for stock quantity
				promptUser(product,'StockQuantity');
			}
	});
} // END: promptStockQuantity()

// prompt the user if they would like to make another purchase
function promptAnotherPurchase() {
	// console log the prompt with custom ask style function
	chalk.prompt('Would you like to purchase another product?');
	// inquirer console log prompt
	inquirer.prompt([
		{
			type:'confirm',
			name:'AnotherPurchase',
			message:'[Y] / [N]:'
		}
	]).then(function(confirm) {
			// check to make sure there is enough stock
			if (confirm.AnotherPurchase) {
				// restart the prompt to to show inventory
				promptUser(null,'ShowInventory');
			} else {
				// console log prompt with custom style function
				chalk.prompt('\nTHANK YOU, COME AGAIN!\n');
			}
	});
} // END: promptAnotherPurchase()


// handle the routing for any user case
function promptUser(data,useCase) {
	// switch statement that routes the function depending on use case
	switch(useCase) {
		case 'ShowInventory':
			// Shows inventory and fires ItemID
			printInventory();
			break;
		case 'ItemID':
      // Processes ItemID and fires StockQuantity
			promptItemID(data);
      break;
    case 'StockQuantity':
      // Processes StockQuantity and fires AnotherPurchase
			promptStockQuantity(data);
      break;
		case 'AnotherPurchase':
			// Prompts the user if they would like to make another purchase
			promptAnotherPurchase();
			break;
		case 'BamazonManager':
			// not yet codded
			chalk.error('MANAGER MODE IS NOT YET CODED');
			break;
    default:
      // default code block
			chalk.error('NO SWITCH CASE SET FOR `'+useCase+'`');
	}
}

module.exports = promptUser;
