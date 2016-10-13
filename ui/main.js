console.log('Loaded!');
//change value
var element= document.getElementById('heading');
element.innerHTML='Bhavana';
//move image
var image=document.getElementById('img');
var move=0;
function MoveLeft(){
    move=move+5;
    img.style.marginLeft=move+'px';
    if(move>=50)
        move=0;
}
img.onclick=function(){
    var interval = setInterval(MoveLeft,50);
};