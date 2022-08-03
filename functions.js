function color(color) {
    document.forms[0].myInput.style.background = color;
    document.forms[0].myInput2.style.background = color;
  }
  function myFunction() {
var x = document.getElementById("form2Example1");
x.value = x.value.toUpperCase();
}

function overfun(id){
document.getElementById(id).classList.add('text-secondary');

} 

function outfun(id){
document.getElementById(id).classList.remove('text-secondary');
document.getElementById(id).classList.add('text-primary');
} 

function myFunction2() {
alert("Welcome To Syriabest website !!");
}
function testfun(){

document.getElementById("test").classList.add('opacity-50');
}
function clearfun(){
document.getElementById("test").classList.remove('opacity-50');
}