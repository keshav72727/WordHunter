var bg_image;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;
var game;
var allPlayers;
var word1;
var answers;
var allWordNames;

const Word1 = "MOTHER   INDIA"
const word2 = "SINGH IS KING"

function preload(){
word1 = loadImage("images/Word1.png");
  bg_image = loadImage("images/WordHunter.png");
}

function setup(){
  createCanvas(1200,700);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  
}

function draw(){
  
  
  if (playerCount === 2){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play()
  }

  if (gameState === 2){
    game.end();
  }
  console.log(gameState);
}