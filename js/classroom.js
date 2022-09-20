var classroomScene = new Phaser.Scene("classroomScene");

classroomScene.create = function(data){
    // 初期設定メソッド呼び出し
    this.config(data);

    //背景色
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //机を作る
    this.createDesks();

    //教卓
    this.text1 = this.add.text(380, 8, '教卓',{
        font : '27px Sawarabi Gothic',
        fill : '#778899',
    });

    //次のシーンへ
    this.nextScene(data.studentNumber, data.selectNumber);

    //机に出席番号を表示
    this.createEnterNumbers(this.desks);
};

classroomScene.config = function(data){
    // 期待するデータ：{studentNumber:5, selectNumber:36}
    if(data.firstSelect) {
        var desks = [];
        for(var i = 1; i < 37; i++){
            if(i === data.selectNumber) {
                desks.push({selectNumber:i, studentNumber:data.studentNumber})
            } else {
              desks.push({selectNumber:i, studentNumber:""});
            }
        }
        this.desks = desks;
    } else {
        var updateDesks = this.desks.map((desk) => {
            if(data.selectNumber === desk.selectNumber) {
                return {selectNumber:data.selectNumber, studentNumber:data.studentNumber};
            }
            return desk;
        });
        this.desks = updateDesks;
    }
};

classroomScene.createDesks = function(){
    for(var i = 0; i < 36; i++){
        var a      = (i + 1);
        var row    = parseInt(i / 6);
        var x      = 100 + row * 120;
        var y      = 0;

        if(a % 6 == 1){
            y = 85;
        }
        if(a % 6 == 2){
            y = 175;
        }
        if(a % 6 == 3){
            y = 270;
        }
        if(a % 6 == 4){
            y = 365;
        }
        if(a % 6 == 5){
            y = 460;
        }
        if(a % 6 == 0){
            y = 550;
        }

        //机の表示
        this.deskImage = this.add.image(x, y, 'desk2');
        this.deskImage.setDisplaySize(108, 72);
    }
};

classroomScene.nextScene = function(studentNumber, selectNumber){
    //次の人への表示
    this.nextImage = this.add.image(660, 24, 'next').setInteractive();
    this.nextImage.setDisplaySize(121.5, 40.5);

    //selectnameSceneに戻る
    this.nextImage.on('pointerdown', function() {
        this.scene.start('selectnameScene',{
            studentNumber : studentNumber,
            selectNumber  : selectNumber,
        });
    },this);
};

classroomScene.createEnterNumbers = function(desks){
    for(var i in desks){
        if(desks[i].studentNumber == ""){
            continue;
        }
        var selectNumber  = desks[i].selectNumber;
        var studentNumber = desks[i].studentNumber;
        var row = parseInt((selectNumber - 1) / 6, 10);
        var x =  60 +  row * 120;
        var y = 0;

        if(selectNumber % 6 == 1){
            y = 75;
        }
        if(selectNumber % 6 == 2){
            y = 165;
        }
        if(selectNumber % 6 == 3){
            y = 260;
        }
        if(selectNumber % 6 == 4){
            y = 355;
        }
        if(selectNumber % 6 == 5){
            y = 450;
        }
        if(selectNumber % 6 == 0){
            y = 540;
        }

        //机に出席番号を表示
        this.DeskNumbers = this.add.text(x, y, 'NO.' + studentNumber,{
            font : '25px Kosugi Maru',
            fill : '#778899',
        });
    }

    //36人席替えが終わったら
    for (var j in desks) {
            if (desks[j].studentNumber == '') {
                return;
            }
    }
    //教卓と次の人へのボタンを消す
    this.text1.destroy();
    this.nextImage.destroy();

    //席替えができたことを伝える
    this.text3 = this.add.text(260, 8, '席替えができました！！',{
       font : '27px Sawarabi Gothic',
       fill : '#778899',
    });

    //終了のボタンの表示
    this.finalImage = this.add.image(100, 24, 'final').setInteractive();
    this.finalImage.setDisplaySize(121.5, 40.5);
    //終了のボタンを押したら再読み込みをする
    this.finalImage.on('pointerdown', function(){
        location.reload();
    },this);

};