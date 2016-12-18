## Node.js & MySQL: Bamazon
* Code: [Github](https://github.com/mqschwanda/RCB-Bamazon)  

### Overview
Amazon-like storefront with MySQL under the hood. The app takes in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

### Quick Start
mySQL is required for this application to function. If you do not have mySQL installed on your local machine [click here](https://dev.mysql.com/downloads/installer/) to install the proper software before continuing.
```
git clone https://github.com/mqschwanda/RCB-Bamazon.git
cd RCB-Bamazon
npm run setup
npm run customer
```

### Use Case
* Then Node application called `BamazonCustomer.js` displays all of the items available for sale include the ids, names, and prices of products for sale.
* The app then prompts users with two messages.
	1. The first asks for the ID of the product the user would like to buy.
	2. The second message asks how many units of the product the user would like to buy.
* Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request. *If not, the app logs an error to the user and asks for a new quantity.* However, if the store does have enough inventory, the customer will get a receipt printout and the database is updated.

### File Structure:
```
.
├── app
│   ├── chalk.js
│   ├── mysql.js
│   ├── printTable.js
│   ├── products.js
│   └── index.js
│
├── data
│   └── schema.sql
│ 
├── node_modules
│ 
├── package.json
│
├── bamazon-customer.js
│
└── bamazon-manager.js

```

### Database Structure:
* Database: `Bamazon`
	* Table: `Products`
		* Attribute: `ItemID` - **primary key**: an auto incrementing integer
		* Attribute: `ProductName` - a string for the product name
		* Attribute: `DepartmentName` - a string for the product name
		* Attribute: `Price` - a decimal for the price
		* Attribute: `StockQuantity` - an integer for the number of products in stock



## TODO:
### Challenge #2: Manager View (Next Level)

* Create a new Node application called `BamazonManager.js`. Running this application will:

	* List a set of menu options:
		* View Products for Sale
		* View Low Inventory
		* Add to Inventory
		* Add New Product

	* If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

	* If a manager selects `View Low Inventory`, then it should list all items with a inventory count lower than five.

	* If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

	* If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

---------------------------------

* If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.

------------------------------------

### Challenge #3: Executive View (Final Level)

1. Create a new MySQL table called `Departments`. Your table should include the following columns:

	* DepartmentID

	* DepartmentName

	* OverHeadCosts (A dummy number you set for each department)

	* TotalSales

2. Modify your `BamazonCustomer.js` app so that when a customer purchases anything from the store, the program will calculate the total sales from each transaction.
	* Add the revenue from each transaction to the `TotalSales` column for the related department.
	* Make sure your app still updates the inventory listed in the `Products` column.

3. Create another Node app called `BamazonExecutive.js`. Running this application will list a set of menu options:
	* View Product Sales by Department
	* Create New Department

4. When an executive selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

	| DepartmentID | DepartmentName | OverHeadCosts | ProductSales | TotalProfit |
	|--------------|----------------|---------------|--------------|-------------|
	| 01           | Electronics    | 10000         | 20000        | 10000       |
	| 02           | Clothing       | 60000         | 100000       | 40000       |


5. The `TotalProfit` should be calculated on the fly using the difference between `OverheadCosts` and `ProductSales`. `TotalProfit` should not be stored in any database. You should use a custom alias.

6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `TotalProfit` to the `Departments` table.

	* Hint: You will need to use joins to make this work.

	* Hint: You may need to look into grouping in MySQL.

	* **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :)
