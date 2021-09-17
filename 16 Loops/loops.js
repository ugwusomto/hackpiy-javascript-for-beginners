//While Loop
let counter = 0;
while(counter < 12){
    document.write(`${counter} <br>`)
    if(counter == 4){
        break;
    }
    counter++;
}


//For Loop
for(let counter = 1 ; counter < 10 ; counter++ ){
    if(counter % 2 == 0){
        continue;
    }
  document.write(`For Loop ${counter} <br>`);

}

//Do While Loop
let counter = 1;
do{
  document.write(`${counter}`)
  counter++;
}while(counter < 10)

//continue and break
