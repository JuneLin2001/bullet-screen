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
  game3= loadImage('../assets/JSgame/game3.png')
}


//前導劇情第一段

function setup() {
  backGround = loadImage('../assets/JSgame/backGround.png');
  createCanvas(1280, 720);
  frameRate(1);
}
//前導劇情第三段
function draw(){
    background(backGround);
    textSize(24);
    fill('white');
    if (frameCount >=  2 && frameCount <  6) {
      image(leePicture, 30, 50);
    }
    if (frameCount >= 3 && frameCount <  6) {
      image(leetextbox, 0, 400);
      text('很遺憾的我們要走到這一步，真不堪。你為了保全你自己，真的什麼都做得出來，犯錯不可\n恥，可恥的是不知悔改，持續撒謊欺騙大眾混淆視聽。記得你跟我說過，你認為最好的公關\n方式就是試圖摧毀另外一個人的名譽和誤導大眾轉移焦點。Nice try.', 250, 620);//可能須視文字長短微調y座標
    }
    if (frameCount >=  6 && frameCount <  10) {
      image(wangPicture, 800, 50);
    }
    if (frameCount >=  7 && frameCount <  10) {
      image(wangtextbox, 0, 400);
      text('左思右想，男人還是應該承擔起所有的責任。我不再做任何解釋和辯解，沒經營好婚姻，給\n家人帶來困擾，沒給大眾做好偶像該有的形象，都是我的錯⋯⋯此事肯定主要是我處理不當\n，再次向大家道歉。', 250, 620);//可能須視文字長短微調y座標
    }
    if (frameCount >= 10 && frameCount <12){
        image(game3,-380,-180);
    }
    if (frameCount >= 12 && frameCount <13){
        window.open('http://localhost:3000/mole-3.html')
    }
  
  }
  
   
  