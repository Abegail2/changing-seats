// スタート画面のシーン
var startScene = new Phaser.Scene("startScene");

startScene.create = function(){
    // 背景色の設定
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //文字
    this.Text = this.add.text(140, 170, '席替えをしよう',{
        font : '80px Kosugi Maru',
        fill : '#778899',
    });

     //チュートリアルの作成
    this.createTutorial();
};

startScene.createTutorial = function(){
    //スタートの画像を表示
    var startImage = this.add.image(400, 340, 'start').setInteractive();
    startImage.setDisplaySize(225, 60);

    //スタートの文字を押すとゲームスタート
    startImage.on('pointerdown', function(){
        this.scene.start('selectnameScene');
    },this);

    //手順の画像を表示
    var manualImage = this.add.image(400, 420, 'manual').setInteractive();
    manualImage.setDisplaySize(225, 60);

    //手順を押すとチュートリアルを表示する
    manualImage.on('pointerdown', function(){
        //スタートのボタンを消す
        startImage.destroy();

        //背景は白
        this.background = this.add.image(405, 335, 'background');
        this.background.setDisplaySize(730, 340);

        //どのように操作するのか
        var step1Text = this.add.text(80, 180, 'step1. STARTを押す',{
            font : '33px Zen Kurenaido',
            fill : '#778899',
        });
        var step2Text = this.add.text(80, 230, 'step2. 自分の出席番号を選ぶ',{
            font : '33px Zen Kurenaido',
            fill : '#778899',
        });
        var step3Text = this.add.text(80, 280, 'step3. 直感でカードを選ぶ',{
            font : '33px Zen Kurenaido',
            fill : '#778899',
        });
        var step4Text = this.add.text(80, 330, 'step4. 自分の位置を確認する',{
            font : '33px Zen Kurenaido',
            fill : '#778899',
        });
        var step5Text = this.add.text(80, 380, 'step5. 確認できたら、"次の人へ"をクリック',{
            font : '33px Zen Kurenaido',
            fill : '#778899',
        });

        this.timeEvent = this.time.addEvent({
            delay : 2000,
            callback : a,
            callbackScope : this,
        });

        var a = function(){
            //戻るボタンの作成
            this.backImage = this.add.image(400, 460, 'back').setInteractive();
            this.backImage.setDisplaySize(90, 60);
        };
            //戻るボタンを押したら元の画面に戻る
            this.backImage.on('pointerdown', function(){
            　　this.scene.start("startScene");
            },this);








    },this);


};
