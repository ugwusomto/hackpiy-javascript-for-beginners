let $button = document.getElementById("btn");

$button.onclick = function(){
  alert("You just clicked me")
}

$button.onmouseover = function(){
  alert("you just move over me");
}

function hover(){
  alert("You moved over the heading");
}

console.log($button)