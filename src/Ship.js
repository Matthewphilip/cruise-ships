function Ship () {
    this.currentPort = 'Dover';
} 

Ship.prototype.setSail = function () {
    this.currentPort = false;
}


module.exports = Ship;