var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockWidth=30;
blockHeight=30;
var playerImage="";
var blockImage="";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerImage=Img;
        playerImage.scaleToWidth(150);
        playerImage.scaleToHeight(150);
        playerImage.set({top:playerY, left:playerX});
        canvas.add(playerImage);
    }
    );
}
function blockUpdate(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImage=Img;
        blockImage.scaleToWidth(blockWidth);
        blockImage.scaleToHeight(blockHeight);
        blockImage.set({top:playerY, left:playerX});
        canvas.add(blockImage);
    }
    );
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true&&keypressed=="80")
    {
        console.log("Shift+P")
        blockWidth=blockWidth+10;
        blockHeight=blockHeight+10;
        document.getElementById("current_width").innerHTML=blockWidth;
        document.getElementById("current_height").innerHTML=blockHeight;
    }
    if (e.shiftKey==true&&keypressed =="77")
    {
        console.log("Shift+M")
        blockWidth=blockWidth-10;
        blockHeight=blockHeight-10;
        document.getElementById("current_width").innerHTML=blockWidth;
        document.getElementById("current_height").innerHTML=blockHeight;
    }
    if (keypressed =="38")
    {
        up();
    }
    if (keypressed =="40")
    {
        down();
    }
    if (keypressed =="37")
    {
        left();
    }
    if (keypressed =="39")
    {
        right();
    }
    if (keypressed =="87")
    {
        blockUpdate("wall.jpg");
        console.log("W");
    }
    if (keypressed =="71")
    {
        blockUpdate("ground.png");
        console.log("G");
    }
    if (keypressed =="76")
    {
        blockUpdate("light_green.png");
        console.log("L");
    }
    if (keypressed=="84")
    {
        blockUpdate("trunk.jpg");
        console.log("T");
    }
    if (keypressed=="82")
    {
        blockUpdate("roof.jpg");
        console.log("R");
    }
    if (keypressed=="89")
    {
        blockUpdate("yellow_wall.png");
        console.log("Y");
    }
    if (keypressed=="68")
    {
        blockUpdate("dark_green.png");
        console.log("D");
    }
    if (keypressed=="85")
    {
        blockUpdate("unique.png");
        console.log("U");
    }
    if (keypressed=="67")
    {
        blockUpdate("cloud.jpg");
        console.log("C");
    }
}
function up() {
    if(playerY>=0){
        playerY=playerY-blockHeight;
        console.log(playerX +","+ playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
}
function down() {
    if(playerY<=500){
        playerY=playerY+blockHeight;
        console.log(playerX +","+ playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
}
function left() {
    if(playerX>=0){
        playerX=playerX-blockWidth;
        console.log(playerX +","+ playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
}
function right() {
    if(playerX<=850){
        playerX=playerX+blockWidth;
        console.log(playerX +","+ playerY);
        canvas.remove(playerImage);
        playerUpdate();
    }
}