console.log('Loaded!');
//change value
var element= document.getElementById('heading');
element.innerHTML='Bhavana';
//move image
var image=document.getElementById('img');
var move=0;
function MoveLeft(){
    if(move<=50)
    {
        move=move+5;
        img.style.marginRight=move+'px';
    }
}

var moveU=0;
function MoveUp(){
    if(move<=100)
    {
        moveU=moveU+5;
        heading.style.marginTop=(-move)+'px';
    }
}

img.onclick=function(){
    var interval = setInterval(MoveLeft,50);
    var int2= setInterval(MoveUp,50);
};
