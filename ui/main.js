var counter=0;
var button= document.getElementById("counter");
button.onclick = function()
{
    
    //render the variable in the counter span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}

