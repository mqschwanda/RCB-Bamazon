/***
  The `product.js` file creates the methods that will execute the necessary
  MySQL commands in the controllers. These are the methods that are need
  to use in order to retrieve and stored data in the database.
***/
// Import `connection.js` which is our mysql connection
var connection = require('./mysql.js');
// export the orm
module.exports = {
    // mysql> SELECT * FROM products;
    selectAll: function (callback) {
      connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;
        // console log the raw sql
        console.log('\nmysql> SELECT * FROM products;\n');
        // callback function with the results json object
        callback(results);
      });
    },
    // mysql> UPDATE products SET StockQuantity = ? WHERE ItemID = ?;
    updateStock: function(ItemID, StockQuantity) {
      connection.query('UPDATE products SET StockQuantity = ? WHERE ItemID = ?', [StockQuantity, ItemID], function(err, result) {
        if (err) throw err;
      });
    }
}; // END: module.exports
