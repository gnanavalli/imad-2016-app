
var button= document.getElementById("counter");

button.onclick = function()
{
    
    //Create request to the counter endpoing
    var request = new XMLHttpRequest();
    
    //capture the response and store it in the variable
    request.onreadystatechange = function() {
        
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

// submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclcik = function()
{
    var names= ["name1","name2","name3","name4" ];
    var list = '';
    for(vari=0;i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};