/**
 *  IF ELSE Statement
 *  IF ELSE IF Statment
 *  SWITCH EXPRESSION
 */

const num1 = 15;

if(num1 > 15){
    //do something
    console.log(`The number is above 15`)
}else if(num1 == 15){
    // do something
    console.log(`The number is equal to 15`)
}else{
    console.log(`The number is below  15`)
}


//switch case
let result = 5*4;
switch(result){
    case 33:
        console.log(`The result is 33`);
        break;
    case 25:
        console.log(`The result is 25`);
        break;
    default:
        console.log('Result doesn\'t match any case ');
        break;
}