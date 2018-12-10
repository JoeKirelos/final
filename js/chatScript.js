var chatLog =0;
var kda;
function preload(){
  kda = loadImage("assets/images/kda.png");
}

function setup(){
  createCanvas(400,550);
  background(0);
}

function draw(){
  push();
  fill(255);
  rect(0,500,400,50);
  fill("#33333355");
  textAlign(CENTER);
  text("Click here to progess chat",0,525,400,550);
  fill(255);
  quad(0,0,400,0,325,75,75,75);
  fill(0);
  text("THE MEME HAUS",35,35,335,75);
  pop(0);
  if(chatLog>=1){
    fill(255);
    rect(100,100,300,50);
    fill(55);
    triangle(400,100,400,150,350,150);
    fill(255);
    text("YOU",372,140);
    fill(0);
    text("Hey you guys seen this song? it's fire.",120,120,400,150);
    if(chatLog>=2){
      image(kda,120,170,300,50);
      if(chatLog>=3){
        fill(255);
        rect(0,230,300,50);
        fill(55);
        triangle(0,230,0,280,50,280);
        fill(255);
        text("NERD",0,270);
        fill(0);
        text("Oh, if you like that you might like this",50,250,300,300);
        if(chatLog>=4){
          fill(255);
          rect(0,290,300,50);
          fill(55);
          triangle(0,290,0,340,50,340);
          fill(255);
          text("NERD",0,330);
          fill(0);
          text("The Game",50,310,300,340);
          if(chatLog>=5){
            fill(255);
            rect(100,350,300,50);
            fill(55);
            triangle(400,350,400,400,350,400);
            fill(255);
            text("YOU",372,390);
            fill(0);
            text("wtf is that ?",120,370,400,400);
            if(chatLog>=6){
              fill(255);
              rect(0,410,300,50);
              fill(55);
              triangle(0,410,0,460,50,460);
              fill(255);
              text("NERD",0,450);
              fill(0);
              text("Just click on it nerd!",50,430,300,460);
            }
          }
        }
      }
    }
  }
}

function mousePressed() {
  if(mouseY > 500){
    chatLog++;
    console.log(chatLog)
  } else if(mouseY > 290 && mouseY <340 && mouseX> 0 && mouseX<300){
   document.getElementById("nextLevel").style.opacity = 1;
  }
}
