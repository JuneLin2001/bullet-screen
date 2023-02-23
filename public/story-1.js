let backGround;
let textBox;
let leePicture;
let wangPicture;
let x = 20; //如果之後第二段劇情要接續第一段秒數比較方便改
let y = x + 13; //如果之後第三段劇情要接續第二段秒數比較方便改
let z = y + 13; //如果之後結尾劇情要接續第三段秒數比較方便改

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
  leePicture = loadImage('../assets/JSgame/leePicture.png');
  wangPicture = loadImage('../assets/JSgame/wangPicture.gif');
  endTextBox1 = loadImage('../assets/JSgame/endTextBox1.png');
  endTextBox2 = loadImage('../assets/JSgame/endTextBox2.png');
  endTextBox3 = loadImage('../assets/JSgame/endTextBox3.png');
  endText = loadImage('../assets/JSgame/endText.png');
  wangtextbox = loadImage('../assets/JSgame/wangtextbox.png');
  leetextbox = loadImage('../assets/JSgame/leetextbox.png');
  game1 = loadImage('../assets/JSgame/game1.png')
}


//前導劇情第一段

function setup() {
  backGround = loadImage('../assets/JSgame/backGround.png');
  createCanvas(1280, 720);
  frameRate(1);
}

function draw() {
  background(backGround);
  textSize(24);
    fill('white');
  if (frameCount >= 3 && frameCount < 6) {
    image(leetextbox, 0, 400);
    text('Z宏在社群媒體上宣布結束與蕾蕾八年的婚姻關係。\n然而，兩天後⋯⋯', 300, 620);
  }
  if(frameCount >= 7 && frameCount < 18) {
    image(leePicture, 30, 50);
  }
  
  if (frameCount >= 8 && frameCount < 13) {
    image(leetextbox, 0, 400);
    text('踏入婚姻的時候我以為我們一輩子就會是一家人了，所以我全心全意\n地為我們的家庭付出我的所有。但在我經歷備孕、懷孕、育兒的同時，\n你不在我身邊，而是選擇繼續過「單身」的生活，繼續約砲、召妓',300,620);
  }
  if (frameCount >= 13 && frameCount < 18) {
    image(leetextbox, 0, 400);
    text('我還遭受你家人們的冷暴力和羞辱，被迫簽署不對等的婚前協議，\n深怕我占到你任何的「便宜」，但你還這樣對我！我太生氣了！', 300, 620);
    
  }
  if (frameCount >= 18 && frameCount <20){
    image(game1,-380,-180);
  }
  if (frameCount >= 20 && frameCount <21){
      window.open('http://localhost:3000/mole-1.html')
  }
}