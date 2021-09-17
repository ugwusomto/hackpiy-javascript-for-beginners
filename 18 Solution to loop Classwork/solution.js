for(let counter = 0 ; counter <= 100 ; counter++ ){
    if((counter % 2 == 0) && (counter % 3 == 0)){
        document.write(`Buzz <br>` )
    }else if((counter % 3 == 0) && (counter % 5 == 0)){
      document.write(`FizzBuzz <br>` )
    }else{
      document.write(`${counter} <br>` )
    }
}