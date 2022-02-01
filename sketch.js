var bg,bg2,form,system,code,security;
var score=0;
var name = "albab";

function preload() {
  coding = loadImage("aladdin_cave2.jpg");
  treasure = loadImage("treasure.jpg");
  sports= loadImage("aladdin_cave.jpg");
  animal = loadImage("images.jpg.jpg");
  gk = loadImage("gk.jpg");
  ceo = loadImage("ceo.jpg");
}

function setup() {
  createCanvas(1000,600);
  system = new System()
  security = new Security();
}
function draw() {
  background(coding); 
  clueStage1();
  security.display1();
  
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(sports);
    clueStage2();
    security.display2();
    
    // fill("black")
    // textSize(40);
    // text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}