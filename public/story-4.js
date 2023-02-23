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
}


function setup() {
  backGround = loadImage('../assets/JSgame/backGround.png');
  createCanvas(1280, 720);
  frameRate(1);
}
 //結尾劇情
 function draw(){
    //background(backGround);
    textSize(24);
    fill('white');
    if (frameCount >=  3 && frameCount <  8) {
      image(endTextBox1, 0, 0);
    }
    if (frameCount >=  4 && frameCount <  8) {
        image(textBox,80,400);
      text('王力宏發布聲明指「男人應該承擔起所有責任」，更凸顯出性別刻板印象、長\n期性別角色分工不均所帶來的問題。男性其實不必、也不應該不需要承擔「所\n有責任」，應該承擔責任的人非特定任一種性別。女性與男性相同，同樣是能\n夠、也正在承擔責任的另一種性別。', 210, 445);//可能要視文字長度調位置
    }
    if (frameCount >=  8 && frameCount <  13) {
      image(endTextBox2, 0, 0);
    }
    if (frameCount >=  9 && frameCount <  13) {
        image(textBox,80,400);
      text('不論如何，任何性別都不必、不能、也不需要以性別框架壓迫自己。當一個人\n以傳統性別壓迫框架自我壓迫，認為這是看待發生在自己身上狀況的唯一原因\n，與此同時，也對其他同一性別的人，產生壓迫。', 210, 460);//可能要視文字長度調位置
    }
    if (frameCount >=  13) {
      image(endTextBox3, 0, 0);
    }
    if (frameCount >=  14) {
        image(textBox,80,400);
      text('這起事件帶給我們反思，重點不是王力宏的八卦或情感關係，而是把反思力道\n放在女性作為妻母的集體困境、家庭中的責任歸屬，如何著手解決、開啟討論\n，才是這起事件能帶給社會。', 210, 460);//可能要視文字長度調位置
    }
    }