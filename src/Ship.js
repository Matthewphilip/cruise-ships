const Port = require("./Port");

function Ship () {
    this.currentPort = "Dover";
} 

Ship.prototype.setSail = function () {
    this.currentPort = false;
}

Ship.prototype.dock = function () {
    this.currentPort = port;
    };


module.exports = Ship;