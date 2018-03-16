var chalk = require("chalk");

var message = chalk.yellowBright.bgRed(" Hello ") + chalk.bgKeyword('orange').black(" World ") + chalk.bgCyanBright.magenta(" I'm here! ");
console.log(message);