var testScene = new Phaser.Scene("testScene");

// global object with game options
var gameOptions = {
    // flipping speed in milliseconds
    flipSpeed : 200,
    // flipping zoom ratio. Simulates the card to be raised when flipping
    flipZoom : 1.2
};


testScene.preload = function() {
    this.load.atlas('poker', 'assets/images/card01.png', 'assets/data/test.json');
};

testScene.create= function(){

};