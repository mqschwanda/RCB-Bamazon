/***
  Function to print the JSON object as a clear human
	readable table in the console.
***/
// import the constructor function that makes a table from JSON
var Table = require('json-table');
// format and declare function with imported json-table module
module.exports = function(jsonObject) {
	// create a table from json and return the formated object for the callback to use
	var table = new Table(jsonObject, {
		// format the display characters
	  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
	    , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
	    , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
	    , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
	}, function(table) {
		// have to call show() function to print out the table
	  table.show()
	});
} // END: printTable()
