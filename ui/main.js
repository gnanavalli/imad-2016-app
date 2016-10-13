console.log('Loaded!');
// change the HTML;

var element = document.getElementById('main-text');
element.innerHTML = 'New Value Test';

// move the image
var img= document.getElementById('madi');
img.onclick = function() {
 img.style.marginLeft = '100px'   ;
}
