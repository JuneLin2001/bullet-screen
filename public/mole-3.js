
let lastIndex = 10;
let mjolnir; //蕾神之錘
// let mole;
let holes = []; //存洞的位置
let lastHole;
let timeUp = false;
let score = 0;
let index; //hole的index
let pp; //派出哪隻地鼠
let bg; //存背景

function scoring() {
    let a = 10;
    if (pp == 1) {
        a = 20;
    } else if (pp == 2) {
        a = -10;
    }

    if (lastIndex != index) { //避免時間沒到再次擊打重複加分
        score += a;
        mjolnir.changeImage('hit');
        holes[index].changeImage('dirt');
    }
    if (score >= 200){
        window.open('http://localhost:3000/story-4.html')
      
    }
    console.log(score);
    console.log(lastIndex);
    lastIndex = index;
    return;
}

function preload() {
    scoreboard = loadImage('images/scoreboard.png')
    mjolnir = createSprite(100, 200);
    mjolnir.addImage('mjolnir', loadImage('images/mjolnir.png'));
    mjolnir.addImage('hit', loadImage('images/exp.png'));
    holes[0] = createSprite(245, 195);
    holes[1] = createSprite(640, 195);
    holes[2] = createSprite(1035, 195);
    holes[3] = createSprite(245, 390);
    holes[4] = createSprite(640, 390);
    holes[5] = createSprite(1035, 390);
    holes[6] = createSprite(245, 585);
    holes[7] = createSprite(640, 585);
    holes[8] = createSprite(1035, 585);
    for (let i = 0; i < 9; i++) {
        holes[i].addImage('dirt', loadImage('images/hole.png'));
        holes[i].addImage('mole0', loadImage('images/wangout.gif'));
        holes[i].addImage('mole1', loadImage('images/20out.gif'));
        holes[i].addImage('mole2', loadImage('images/10out.gif'));
        holes[i].scale = 0.5;
    }
}


//game start
function setup() {
    createCanvas(1280, 720);
    bg = loadImage('images/background.png');
    textSize(24);
    fill('white');
    startGame();
}

function draw() {
    background(bg);
    image(scoreboard,50,50)
    mjolnir.position.x = mouseX;
    mjolnir.position.y = mouseY;
    text(`第三關過關分數：200分，當前分數： ${score}`, 420, 95);

    drawSprites();
}

function mousePressed() { //判斷滑鼠在洞的範圍，而且打擊的位置是正確的話，就加分
    if ((mouseX > 245 - 50 && mouseX < 245 + 50 && mouseY > 195 - 50 && mouseY < 195 + 50) && index == 0) {
        scoring();
    } else if ((mouseX > 640 - 50 && mouseX < 640 + 50 && mouseY > 195 - 50 && mouseY < 195 + 50) && index == 1) {
        scoring();
    } else if ((mouseX > 1035 - 50 && mouseX < 1035 + 50 && mouseY > 195 - 50 && mouseY < 195 + 50) && index == 2) {
        scoring();
    } else if ((mouseX > 245 - 50 && mouseX < 245 + 50 && mouseY > 390 - 50 && mouseY < 390 + 50) && index == 3) {
        scoring();
    } else if ((mouseX > 640 - 50 && mouseX < 640 + 50 && mouseY > 390 - 50 && mouseY < 390 + 50) && index == 4) {
        scoring();
    } else if ((mouseX > 1035 - 50 && mouseX < 1035 + 50 && mouseY > 390 - 50 && mouseY < 390 + 50) && index == 5) {
        scoring();
    } else if ((mouseX > 245 - 50 && mouseX < 245 + 50 && mouseY > 585 - 50 && mouseY < 585 + 50) && index == 6) {
        scoring();
    } else if ((mouseX > 640 - 50 && mouseX < 640 + 50 && mouseY > 585 - 50 && mouseY < 585 + 50) && index == 7) {
        scoring();
    } else if ((mouseX > 1035 - 50 && mouseX < 1035 + 50 && mouseY > 585 - 50 && mouseY < 585 + 50) && index == 8) {
        scoring();
    }
}

function mouseReleased() {
    mjolnir.changeImage('mjolnir');
}

//以下是出現地鼠的機制的程式碼，應該不需要改東西

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    //prevent same hole from getting the same number
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 1500); //get a random time to determine how long mole should peep
    const hole = randomHole(holes); //get the random hole from the randomHole function
    pp = Math.floor(Math.random() * 3); //多地鼠要加數字，隨機派出加分或扣分的地鼠
    hole.changeImage('mole' + pp); //the selected mole can "pop up"
    //hole.reset();//這行我跑不出來，但我看p5.js是正確的，你試試看

    setTimeout(() => {
        hole.changeImage('dirt'); //make the selected mole "pop down" after a random time
        if (!timeUp) {
            peep();
        }
    }, time);
}

function startGame() {
    score = 0;
    peep();
}



  
