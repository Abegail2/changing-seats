var finalScene = new Phaser.Scene('finalScene');

finalScene.create = function(data){
    // 背景色の設定
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //説明の表示
    this.text1 = this.add.text(380, 8, '席替えが終わりました！',{
        font : '27px Sawarabi Gothic',
        fill : '#778899',
    });


};

finalScene.createDesks = function(){
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

finalScene.createstudentNumbers = function(data){
    for(var i in data){
        if(data[i].studentNumber == ""){
            continue;
        }
        var selectNumber  = data[i].selectNumber;
        var studentNumber = data[i].studentNumber;
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
};

