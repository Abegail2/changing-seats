var selectnameScene = new Phaser.Scene("selectnameScene");

selectnameScene.create = function (data) {
    // 初期設定メソッド呼び出し
    this.config(data);

    // 背景色の設定
    this.cameras.main.setBackgroundColor('#f0f8ff');

    //ネームプレートの作成
    this.NamePlates();

    for(var i = 0; i < this.number.length; i++){
        // iを渡してしまうと例えば「３」を消しても、配列の数（i）を渡しているので、0~34の値を渡すことになってしまい、
        // 3が消えずに末尾の36が消える処理になっていたため、配列の値を直接渡すようにする
        // this.NamePlates(i);
        this.NamePlates(this.number[i]);
    }

    //説明
    this.atext = this.add.text(210, 17, '自分の出席番号を選んでください',{
        font : '25px Sawarabi Gothic',
        fill : '#778899',
    });
};

selectnameScene.update = function() {
};

selectnameScene.config = function (data) {
    this.selectNumber = data.selectNumber;

    // 初めの１回目は配列を定義する
    if(data.studentNumber == undefined) {
        this.firstSelect = true;
        this.number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    }

    // ２回目以降はclassroom.jsから選んだ出席番号が渡ってくるので、その値を削除する
    if(data.studentNumber != undefined) {
        this.firstSelect = false;
        //すでに選ばれた出席番号を除外する
        var selectedNumber = this.number.indexOf(data.studentNumber);
        this.number.splice(selectedNumber, 1);
    }
};

selectnameScene.NamePlates = function(a){
    var number = 'NO.' + a;
    var row    = parseInt((a - 1) / 6);
    var x      = 30 + row * 130;
    var y      = 0;

    if(a % 6 == 1){
        y = 55;
    }
    if(a % 6 == 2){
        y = 145;
    }
    if(a % 6 == 3){
        y = 240;
    }
    if(a % 6 == 4){
        y = 335;
    }
    if(a % 6 == 5){
        y = 430;
    }
    if(a % 6 == 0){
        y = 520;
    }

    //出席番号の表示
    var NamePlatesText = this.add.text(x , y , number,{
        font : '30px Kosugi Maru',
        fill : '#20b2aa',
    }).setInteractive();

    //次のシーンへ
    NamePlatesText.on('pointerdown', function() {
        this.scene.start('lotteryScene',{
             firstSelect: this.firstSelect,
             NUMBER     : a,
             selectNumber: this.selectNumber,
        });
    },this);
};



