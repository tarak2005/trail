//maake all the required variables
var database, canvas, backGroundImg;
var gameState = 0;
var casualityNumber = 0;
var form;

var casuality;
var game;

//load the required images
function preload(){
img = loadImage("image.png")

}


function setup(){
//create a canvas
canvas = createCanvas(400,700); 
database = firebase.database();

//form = new Form();
//casuality = new Casuality();

game = new Game();
game.start();

}



function draw(){
    background (img);
   
    
    
    
}
