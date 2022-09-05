var canvas=document.getElementById("myCanvas");
var rtx=canvas.getContext("2d");
var gordrob=100;
var sultan=90;
var azul="mars.jpg";
var wall="rover.png";
var wallx=10;
var wally=10;
function add(){
    backgroundimg=new Image();
    backgroundimg.onload=rtx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);;
    backgroundimg.src=azul;
    roverimg=new Image();
    roverimg.onload=rtx.drawImage(roverimg,wallx,wally,gordrob,sultan);
    roverimg.src=wall;

}
window.addEventListener("keydown",flecha);
function uploadbackground(){
    rtx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);;
}
function uploadrover(){
    rtx.drawImage(roverimg,wallx,wally,gordrob,sultan);
}
function flecha(e){
    var tecla=e.keyCode;
    if (tecla=='38') {
        if (wally>=0) {
          wally=wally-10;
          uploadbackground();
          uploadrover();
          
            
        }    
    }
    if (tecla=='40') {
        if (wally<=500) {
            wally=wally+10;
            uploadbackground();
            uploadrover();
            
        }
    }
    if (tecla=='37') {
     if (wallx>=0) {
        wallx=wallx-10
        uploadbackground();
        uploadrover();
     }   
    }
    if (tecla=='39') {
        if (wallx<=700) {
            wallx=wallx+10
            uploadbackground();
            uploadrover();
        }
        
    }
}
