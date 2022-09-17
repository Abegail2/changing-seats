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
        this.background = this.add.image(405, 335, 'manualbackgound');
        this.background.setDisplaySize(720, 315);

        //どのように操作するのか
        var step1Text = this.add.text(100, 200, 'step1. STARTを押す',{
            font : '35px Zen Kurenaido',
            fill : '#778899',
        });
        var step2Text = this.add.text(100, 250, 'step2. 自分の出席番号を選ぶ',{
            font : '35px Zen Kurenaido',
            fill : '#778899',
        });
        var step3Text = this.add.text(100, 300, 'step3. 直感でカードを選ぶ',{
            font : '35px Zen Kurenaido',
            fill : '#778899',
        });
        var step4Text = this.add.text(100, 350, 'step4. 自分の位置を確認する',{
            font : '35px Zen Kurenaido',
            fill : '#778899',
        });

        // //2秒後に戻るのボタンを表示
        // this.timeEvent = this.time.addEvent({
        //     delay         : 2000,
        //     callback      : this.createBackbutton,
        //     callbackScope : this,
        // });

        //startScene.createBackbutton = function(){
            //戻るのボタン
            var backImage = this.add.image(400, 440, 'back').setInteractive();
            backImage.setDisplaySize(90, 60);

        // //画像の変化量
        // this.dx = 2;
        // this.width = 200;
　　　　//画像の大きさを変える
        // var changeScale = function(){
        //     //もし100より小さくなったら
        //     if(this.width < 100){
        //         this.d = -this.d;
        //     }
        //     //もし300より大きくなったら
        //     if(this.width > 300){
        //       this.d = -this.d;
        //   }
        //     this.width += this.d;
        //     this.backImage.displaywidth = this.width;

            //戻るのボタンを押したら元の画面に戻る
            backImage.on('pointerdown', function(){
            　　this.scene.start("startScene");
            },this);

        // };



        //};


    },this);


};
