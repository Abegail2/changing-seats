var classroomScene = new Phaser.Scene("classroomScene");

classroomScene.create = function(data){
    // 初期設定メソッド呼び出し
    this.config(data);

    //背景色
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //机を作る
    this.createDesks();

    //机に出席番号を表示
    this.createEnterNumbers(this.desks);

    //教卓
    this.text1 = this.add.text(380, 8, '教卓',{
        font : '27px Sawarabi Gothic',
        fill : '#778899',
    });

    //次のシーンへ
    this.nextScene(data.studentNumber, data.selectNumber);
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
            y = 65;
        }
        if(selectNumber % 6 == 2){
            y = 155;
        }
        if(selectNumber % 6 == 3){
            y = 250;
        }
        if(selectNumber % 6 == 4){
            y = 345;
        }
        if(selectNumber % 6 == 5){
            y = 440;
        }
        if(selectNumber % 6 == 0){
            y = 530;
        }

        //机に出席番号を表示
        this.DeskNumbers = this.add.text(x, y, 'NO.' + studentNumber,{
            font : '25px Kosugi Maru',
            fill : '#778899',
        });
    }

    //36人席替えが終わったらfinalSceneに移る
    for (var j in desks) {
            if (desks[j].studentNumber == '') {
                return;
            }
    }
    this.nextScene = false;


};

classroomScene.nextScene = function(studentNumber, selectNumber){
    //説明の表示
    this.text2 = this.add.text(600, 8, '次の人へ',{
        font : '27px Sawarabi Gothic',
        fill : '#778899',
    }).setInteractive();

    //selectnameSceneに戻る
    this.text2.on('pointerdown', function() {
        this.scene.start('selectnameScene',{
            studentNumber : studentNumber,
            selectNumber  : selectNumber,
        });
    },this);
};

