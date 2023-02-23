//前面的預載

let backGround;
let textBox;
let leePicture;
let wangPicture;
let x = 0; //如果之後第二段劇情要接續第一段秒數比較方便改
let y = x + 0; //如果之後第三段劇情要接續第二段秒數比較方便改
let z = y + 0; //如果之後結尾劇情要接續第三段秒數比較方便改

function preload() {
  textBox = loadImage('../assets/JSgame/textBox.png');
  leeText1 = loadImage('../assets/JSgame/leeText1.png');
  leeText2 = loadImage('../assets/JSgame/leeText2.png');
  leeText3 = loadImage('../assets/JSgame/leeText3.png');
  leeText4 = loadImage('../assets/JSgame/leeText4.png');
  wangText1 = loadImage('../assets/JSgame/wangText1.png');
  wangText2 = loadImage('../assets/JSgame/wangText2.png');
  wangText3 = loadImage('../assets/JSgame/wangText3.png');
  leeName = loadImage('../assets/JSgame/leeName.png');
  wangName = loadImage('../assets/JSgame/wangName.png');
  leePicture = loadImage('../assets/JSgame/leePicture.gif');
  wangPicture = loadImage('../assets/JSgame/wangPicture.gif');
  endTextBox1 = loadImage('../assets/JSgame/endTextBox1.png');
  endTextBox2 = loadImage('../assets/JSgame/endTextBox2.png');
  endTextBox3 = loadImage('../assets/JSgame/endTextBox3.png');
  endTextBox = loadImage('../assets/JSgame/endTextBox.png');
  endText = loadImage('../assets/JSgame/endText.png');
  wangtextbox = loadImage('../assets/JSgame/wangtextbox.png');
  leetextbox = loadImage('../assets/JSgame/leetextbox.png');
  game2 = loadImage('../assets/JSgame/game2.png')
}

function setup() {
    backGround = loadImage('assets/JSgame/backGround.png');
    createCanvas(1280, 720);
    frameRate(1);
  }

  //前導劇情第二段
  function draw(){
    background(backGround);
    textSize(24);
    fill('white');
  if (frameCount >=  2 && frameCount < 10) {
    image(wangPicture, 800, 50);
  }
  if (frameCount >= 3 && frameCount < 6) {
    image(wangtextbox, 0, 400);
    text('今天是我人生中最難過的一天，是一場巨烈，巨痛的噩夢。我的兩難，是如果反駁這麼多不\n實的指控，會對我三個孩子的媽媽不好。但如果我不回應的話，大家會相信那些事情是真的\n⋯⋯我真的不想傷害她，更不想傷害我們的孩子。他們都是我家人，我的全部，我的最愛。', 250, 620);//可能須視文字長短微調y座標
  }
  if (frameCount >=  6 && frameCount <  9) {
    image(wangtextbox, 0, 400);
    text('我可以很肯定的說，我沒有對我們的婚姻不忠!', 300, 620);//可能須視文字長短微調y座標
  }
  if (frameCount >= 10 && frameCount <12){
    image(game2,-380,-180)
}
  if (frameCount >= 12 && frameCount <13){
    window.open('http://localhost:3000/mole-2.html')
}

}

  
