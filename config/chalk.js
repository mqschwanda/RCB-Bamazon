var chalk = require('chalk');
// format the console log output with chalk for dirrent uses
module.exports = {
	error: function(string) {
		console.log(chalk.bold.red(string));
	},
	prompt: function(string) {
		console.log(chalk.bold(string));
	}
}
