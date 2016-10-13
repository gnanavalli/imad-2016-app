
var button= document.getElementById("counter");
button.onclick = function()
{
    
    //Create request to the counter endpoing
    var request = new XMLHttpRequest();
    
    //capture the response and store it in the variable
    request.onreadystatechanged = function() {
        
            if (request.readyState === XMLHttpRequest.DONE)
            {
                //take some action
                if (request.status === 200)
                {
                    var counter = request.responseText;
                    var span = document.getElementById("count");
                    span.innerHTML = counter.toString();
                }
            }
    };
    //Make the request
    request.open('GET','http://gnanavalli.imad.hasura-app.io/counter',true);
    request.send(null);
   
}

