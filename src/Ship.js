function Ship () {
    this.startingPort = 'Dover';
} 

Ship.prototype.setSail = function () {
    this.startingPort = false;
}


module.exports = Ship;