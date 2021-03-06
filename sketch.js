var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount;
var car1;
var car2;
var car1img;
var car2img;
var cars;
var track;
var allPlayers
var gameState
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1img = loadImage("./assets/car1.png")
  car2img = loadImage("./assets/car2.png")
  track = loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if (playerCount===2) {
    game.update(1)
  }
  if (gameState===1) {
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
