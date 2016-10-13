var button = document.getElementById('counter');

button.onclick = function(){
    console.log("Button clicked");
    
    var request = new XMLHttpRequest();
    
    request.open('GET','/counter',true);
    request.send(null);

    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE){
            console.log("Inside DONE");
            if(request.status===200){
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
                console.log(counter);
                
            }
            
        }
    }
    
    
};

