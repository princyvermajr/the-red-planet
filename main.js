canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=100;

Backgroundimage ="mars.jpg";
roverimage="rover.png";

rover_X=10;
rover_y=10;

function add(){
Background_imgTag=new Image();
Background_imgTag.onload= uploadBackground;
Background_imgTag.src=Backgroundimage;

rover_imgTag=new Image();
rover_imgTag.onload= uploadrover;
rover_imgTag.src=roverimage;

}

function uploadBackground(){
    ctx.drawImage(Background_imgTag ,0,0,canvas.width ,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_X,rover_y,rover_height,rover_width);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log("keypressed");
if(keypressed=='38'){
    up();
}
if(keypressed=='40'){
    down();
}
if(keypressed=='37'){
    left();
}
if(keypressed=='39'){
    right();
}
}
function up()
{
if(rover_y>=0)
rover_y=rover_y-10
console.log("When up arrow is pressed,x="+rover_X+"y="+rover_y);
uploadBackground();
uploadrover();

}
function down()
{
if(rover_y<=500)
rover_y=rover_y+10
console.log("When up arrow is pressed,x="+rover_X+"y="+rover_y);
uploadBackground();
uploadrover();
}
function left()
{
if(rover_X>=0)
rover_X=rover_X-10
console.log("When up arrow is pressed,x="+rover_X+"y="+rover_y);
uploadBackground();
uploadrover();

}
function right()
{
    if(rover_X<=700)
    rover_X=rover_X+10;
    console.log("When up arrow is pressed,x="+rover_X+"y="+rover_y);
    uploadBackground();
    uploadrover();
    }