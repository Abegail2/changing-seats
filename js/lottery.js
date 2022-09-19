var lotteryScene = new Phaser.Scene("lotteryScene");

lotteryScene.preload = function() {
    // 画像フリップのためにプラグインを追加
    this.load.plugin('rexperspectiveimageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexperspectiveimageplugin.min.js', true);
};

lotteryScene.create = function (data) {
    // 初期設定メソッド呼び出し
    this.config(data);

    // 背景色の設定
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //カードを作成
    this.createCard(data, this.numbers);

    //説明の表示
    this.text = this.add.text(220, 10, '好きなカードを選んでください',{
        font : '25px Sawarabi Gothic',
        fill : '#778899',
    });
};

lotteryScene.config = function (data) {
    //ランダムに数を作成
    if(data.firstSelect) {
        var numbers = [];
        /* [37,19,15,315,34,0] ×
        [{id:1,number:37},{id:2,number:19},{id:3,number:15},{id:4,number:315}]*/
        for(var i = 0; i < 36; i++){
            while(true){
                var randomnumber = Math.floor(Math.random() * 36) + 1;
                /*numbersの中にrandomunuberがすでにあるかどうかの判定 someが配列内に指定した要素があるかを判定する
                あったらtrue,なかったらfalse*/
                var isRandomNumberToNumbersArray = numbers.some((obj) => obj.number == randomnumber);
                // if(!numbers.includes(randomnumber)){
                if(!isRandomNumberToNumbersArray){
                    numbers.push({id:i,number:randomnumber});
                    break;
                }
            }
        }
        this.numbers = numbers;
    } else {
         /* [3,1,4,2]
        ↑4を選んだから消したい
        splice関数では配列の何番目かとして、処理をするので、これだと配列の4番目を消してしまう*/

        // indexOfを使うことで、その値が配列の何番目かを取得して、その値をsplice関数に渡す。
        var updateNumbers = this.numbers.map((number) => {
            if(number.number === data.selectNumber) {
                return {id:number.id,　number:null};
            }
            return number;
        });
        this.numbers = updateNumbers;
        // this.numbers.splice(this.numbers.indexOf(data.selectNumber), 1);
    }
};

var setCard = function (scene, x, y, frontFace, backFace) {
    return scene.add.rexPerspectiveCard(x, y, {
        front: { key: frontFace },
        back : { key: backFace },
        face : 'back',

        flip: {
            frontToBack: 'right',
            backToFront: 'left',
            duration   : 1000,
            ease       : 'Cubic'
        }
    })
        .setScale(0.14)
        .setInteractive()
        .on('pointerdown', function (pointer, localX, localY) {
            if (localX <= (this.width / 2)) {
                this.flip.flipLeft();
            } else {
                this.flip.flipRight();
            }
        });
};

lotteryScene.createCard = function(data, numbers){
    // console.log(data)
    // console.log(numbers)
    //数を並べ、表示
    for(var j in numbers){
        if(numbers[j].number === null) {
            continue;
        }
        var a      = (Number(numbers[j].id) + 1);
        var row    = parseInt(numbers[j].id　/ 6);
        var x      = 75 + row * 130;
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

        var create = function(selectNumber, studentNumber){
            //カードの作成
            var card = setCard(lotteryScene, x, y, 'card' + numbers[j].number, 'card_ura');
            // カードのフリップが完了（complete）した時点で実行する
            card.flip.on('complete', function(){
                lotteryScene.scene.start('classroomScene', {
                    selectNumber  : selectNumber,
                    studentNumber : studentNumber,
                    firstSelect   :data.firstSelect
                });
            });
        };
        create(numbers[j].number, data.NUMBER);
    }
};
