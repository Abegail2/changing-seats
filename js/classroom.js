var classroomScene = new Phaser.Scene("classroomScene");

classroomScene.create = function(data){
    // 初期設定メソッド呼び出し
    //this.config(data);

    console.log(data);

    //背景色
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //机を作る
    this.createDesks();

    //机に出席番号を表示
    this.createEnterNumbers(data.studentNumber, data.status);

    //教卓
    this.text1 = this.add.text(380, 8, '教卓',{
        font : '27px Sawarabi Gothic',
        fill : '#778899',
    });

    //次のシーンへ
    this.nextScene(data.studentNumber, data.status);
};

classroomScene.createDesks = function(){
    for(var i = 0; i < 36; i++){
        var a      = (i + 1);
        var row    = parseInt(i / 6);
        var x      = 100 + row * 120;
        var y      = 0;

        if(a % 6 == 1){
            y = 80;
        }
        if(a % 6 == 2){
            y = 170;
        }
        if(a % 6 == 3){
            y = 265;
        }
        if(a % 6 == 4){
            y = 360;
        }
        if(a % 6 == 5){
            y = 455;
        }
        if(a % 6 == 0){
            y = 545;
        }

        //机の表示
        this.deskImage = this.add.image(x, y, 'desk2');
        this.deskImage.setDisplaySize(108, 72);
    }
};

classroomScene.createEnterNumbers = function(studentNumber, status){
    var selectNumber = status;
    var row = parseInt(selectNumber / 6);
    var x =  60 +  row * 120;
    var y = 0;

    if(selectNumber % 6 == 1){
            y = 70;
    }
    if(selectNumber % 6 == 2){
            y = 160;
    }
    if(selectNumber % 6 == 3){
            y = 255;
    }
    if(selectNumber % 6 == 4){
            y = 350;
    }
    if(selectNumber % 6 == 5){
            y = 445;
    }
    if(selectNumber % 6 == 0){
            y = 535;
    }

    //机に出席番号を表示
    this.DeskNumbers = this.add.text(x, y, 'NO.' + studentNumber,{
        font : '25px Kosugi Maru',
        fill : '#778899',
    });
};

classroomScene.nextScene = function(studentNumber, selectNumber){
    //説明の表示
    this.text2 = this.add.text(600, 8, 'NEXT',{
        font : '27px Sawarabi Gothic',
        fill : '#778899',
    }).setInteractive();

    //最初のシーンに戻る
    this.text2.on('pointerdown', function() {
        this.scene.start('selectnameScene',{
            studentNumber : studentNumber,
            selectNumber  : selectNumber,
        });
    },this);
};

