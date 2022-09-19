// 画像読込のシーン
var loadScene = new Phaser.Scene("loadScene");

loadScene.preload = function() {
    // スタート画像
    this.load.image('gamestart', 'assets/images/gamestart.gif');
    this.load.image('background', 'assets/images/manualbackground.png');
    this.load.image('back', 'assets/images/back.png');
    this.load.image('start', 'assets/images/start.png');
    this.load.image('manual', 'assets/images/manual.png');

    // ゲームオーバー画像
    this.load.image('gameover', 'assets/images/gameover.png');

    //カードの画像(lotteryScene)
    //カードの裏の画像
    this.load.image('card_ura', 'assets/images/card_ura.png');
    //カード1～36
    this.load.image('card1', 'assets/images/card01.png');
    this.load.image('card2', 'assets/images/card02.png');
    this.load.image('card3', 'assets/images/card03.png');
    this.load.image('card4', 'assets/images/card04.png');
    this.load.image('card5', 'assets/images/card05.png');
    this.load.image('card6', 'assets/images/card06.png');
    this.load.image('card7', 'assets/images/card07.png');
    this.load.image('card8', 'assets/images/card08.png');
    this.load.image('card9', 'assets/images/card09.png');
    this.load.image('card10', 'assets/images/card10.png');
    this.load.image('card11', 'assets/images/card11.png');
    this.load.image('card12', 'assets/images/card12.png');
    this.load.image('card13', 'assets/images/card13.png');
    this.load.image('card14', 'assets/images/card14.png');
    this.load.image('card15', 'assets/images/card15.png');
    this.load.image('card16', 'assets/images/card16.png');
    this.load.image('card17', 'assets/images/card17.png');
    this.load.image('card18', 'assets/images/card18.png');
    this.load.image('card19', 'assets/images/card19.png');
    this.load.image('card20', 'assets/images/card20.png');
    this.load.image('card21', 'assets/images/card21.png');
    this.load.image('card22', 'assets/images/card22.png');
    this.load.image('card23', 'assets/images/card23.png');
    this.load.image('card24', 'assets/images/card24.png');
    this.load.image('card25', 'assets/images/card25.png');
    this.load.image('card26', 'assets/images/card26.png');
    this.load.image('card27', 'assets/images/card27.png');
    this.load.image('card28', 'assets/images/card28.png');
    this.load.image('card29', 'assets/images/card29.png');
    this.load.image('card30', 'assets/images/card30.png');
    this.load.image('card31', 'assets/images/card31.png');
    this.load.image('card32', 'assets/images/card32.png');
    this.load.image('card33', 'assets/images/card33.png');
    this.load.image('card34', 'assets/images/card34.png');
    this.load.image('card35', 'assets/images/card35.png');
    this.load.image('card36', 'assets/images/card36.png');

    //机の画像(classoroomScene)
    this.load.image('desk', 'assets/images/desk.png');
    this.load.image('desk2', 'assets/images/desk2.png');
    this.load.image('next', 'assets/images/next.png');
    this.load.image('final', 'assets/images/final.png');

};

loadScene.create = function() {
    // 読み込み完了後にstartSceneを起動
    this.scene.start("startScene");
};
