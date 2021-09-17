const formObject = document.getElementById('form');
formObject.onsubmit = function(event){
  event.preventDefault();

  // get our input elements object
  const number1Obj = document.getElementById('number1');
  const number2Obj = document.getElementById('number2');

  // get the values entered
  let number1 = number1Obj.value;
  let number2 = number2Obj.value;

  // sum the numbers
  const sum = parseInt(number1) + parseInt(number2);
  
  // get the display element object
  const display = document.getElementById('display');
  display.innerHTML = `The sum of ${number1} and ${number2} is ${sum}`;


}