// スタート画面のシーン
var startScene = new Phaser.Scene("startScene");

startScene.create = function () {
    // 背景色の設定
    this.cameras.main.setBackgroundColor('#f0f8ff');
    //文字
    this.Text = this.add.text(300, 170, '席替え',{
        font : '80px Kosugi Maru',
        fill : '#778899',
    });

    //スタートの文字
    var startText = this.add.text(340, 300, 'START',{
        font : '50px Kosugi Maru',
        fill : '#778899',
    }).setInteractive();

    //スタートの文字を押すとゲームスタート
    startText.on('pointerdown', function(){
        this.scene.start('selectnameScene');
    },this);

    //チュートリアルの作成 時間に余裕があった
    this.createTutorial();


};

startScene.createTutorial = function(){

};