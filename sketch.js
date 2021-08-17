var man , man_running
var path,path_image
var power , power_image , pathG 
var bomb , bomb_image , bombG 
var coin , coin_image , coinG 
var energyDrink , energyDrink_image , energyDrinkG
var gameState = 1

var treasure = 0

var PLAY = 1
var END = 0


function preload(){
  //pre-load images
  man_running = loadAnimation("Runner-1.png" , "Runner-2.png")
  path_image = loadImage("path.png")
  power_image = loadImage("power.png")
  bomb_image = loadImage("bomb.png")
  coin_image = loadImage("coin.png")
  energyDrink_image = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,600);
  man = createSprite(70 , 580 , 20,50)
  man.addAnimation("running" , man_running)
  man.scale = 0.05
  path = createSprite(200 ,200)
  path.addImage(path.png)
  path.scale = 0.1
  coinG = new Group()
  powerG = new Group()
  bombG = new Group()
  energyDrinkG = new Group()
  
  //create sprites here
}

function draw() {
  if (gameState === PLAY){
    man.x = World.mouseX

  background(0);
  edges = createEdgeSprites

  man.collide(edges)
  if (path.y > 400){
    path.y = height/2

  }
  if (coinG.isTouching(man)){
    coinG.destroyEach()
    treasure = treasure + 50
  }
  
  if (powerG.isTouching(man)){
    powerG.destroyEach()
    treasure = treasure + 20
  }

  if (energyDrinkG.isTouching(man)){
    energyDrinkG.destroyEach()
    treasure = treasure + 40
  }

  if (bombG.isTouching(man)){
    gameState == END
    coinG.destroyEach()
    powerG.destroyEach()
    bombG.destroyEach()
    energyDrinkG.destroyEach()

    coinG.setVelocityYEach(0)
    powerG.setVelocityYEach(0)
    bombG.setVelocityYEach(0)
    energyDrinkG.setVelocityYEach(0)
    
  }

  createPower()
  createEnergyDrink()
  createBomb()
  createCoin()

  Text("Treasure" + treasure , 150 , 30)

  drawSprites()
}
}

function createPower(){
  if (World.framecount % 200 == 0){
    power = createSprite(Math.round(random(50 , 350),40,10,10))
    power.addImage(power_image)
    power.scale = 0.1
    power.velocityY = 3
    power.lifetime = 150
    powerG.add(power)
  }
}

function createCoin(){
  if (World.framecount % 200 == 0){
    coin = createSprite(Math.round(random(50 , 350),40,10,10))
    coin.addImage(coin_image)
    coin.scale = 0.1
    coin.velocityY = 3
    coin.lifetime = 150
    coinG.add(coin)
  }
}

function createEnergyDrink(){
  if (World.framecount % 200 == 0){
    energyDrink = createSprite(Math.round(random(50 , 350),40,10,10))
    energyDrink.addImage(energyDrink_image)
    energyDrink.scale = 0.1
    energyDrink.velocityY = 3
    energyDrink.lifetime = 150
    energyDrinkG.add(energyDrink)
  }
}

function createBomb(){
  if (World.framecount % 200 == 0){
    bomb = createSprite(Math.round(random(50 , 350),40,10,10))
    bomb.addImage(bomb_image)
    bomb.scale = 0.1
    bomb.velocityY = 3
    bomb.lifetime = 150
    bombG.add(bomb)
  }
}


