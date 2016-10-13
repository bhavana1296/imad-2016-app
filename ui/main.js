console.log('Loaded!');
//change value
var element= document.getElementById('heading');
element.innerHTML='Bhavana';
//move image
var image=document.getElementById('img');
var move=0;
function MoveRight(){
    if(move<=50)
    {
        move=move+5;
        img.style.marginLeft=move+'px';
    }
}
img.onclick=function(){
    var interval = setInterval(MoveRight,50);
};