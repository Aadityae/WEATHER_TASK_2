const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,rain,hail
var ice = [];
var maxDrops = 100;
var drops = [];
var engine, world;
var sunrise,night,sunset,day,houseSunrise
var security,system

function preload()
{
 
  sunrise = loadImage("Sunrise.png")
  day = loadImage("Day.png")
  sunset = loadImage("Sunset.png")
  night = loadImage("Night.png")
  houseSunrise = loadImage("houseSunrise.png")
  houseDay= loadImage("houseDay.png")
  houseNight = loadImage("houseNight.png")
}

function setup() 
{
  engine = Engine.create();
  world = engine.world;

  
  createCanvas(800,1000);
  security = new Security();
  system = new System();
 
 Engine.run(engine);
}

function draw() {
 
 
 
 
  
  security.display()
  

  drawSprites();
}