var bananaImg, obstacleImg, obstacleGroup, background, score;
var monkey;

function preload() {
  backImage = loadImage("jungle.jpg");
  player_running = 
loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png","Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_9.png","Monkey_10.png");

bananaImg = loadImage("banana.png");
  obstacleImg= loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
background = createSprite(0, 400);
  background.addImage("jungle.jpg");
  background.velocityX = -4;
  monkey = createSprite(20, 380);
  monkey.addAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png","Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_9.png","Monkey_10.png");
  
background.x = background.width/2;
}

function draw() {
  
  if(foodgroup)
  
  
  background(220);
  display();
}