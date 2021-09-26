/**
 *  This program is written to support Nigerian Phone Numbers Only
 *  Networks : MTN , GLO , AIRTEL , 9MOBILE
 *  prefix source https://naijaknowhow.net/mobile-telephone-number-prefixes-nigeria/
 */



/**
 * Network Prefixes arranged in order MTN,GLO,AIRTEL,9MOBILE
 */
const networkPrefixes = [
       ["0803","0806","0814","0810","0813","0814","0816","0703","0706","0903","0906"], 
       ["0805","0807","0811","0815","0705","0905"],
       ["0802","0808","0812","0708","0701","0902","0901","0907"],
       ["0809","0817","0818","0908","0909"]
];

//message function
const showMessage  = (message) => {
    const messageBox =    document.querySelector(".message");
    messageBox.innerHTML = message;
    const timeout = setTimeout(()=>{
       messageBox.innerHTML = '';
       clearTimeout(timeout);
    },3000)
}

//network name finder
const getName = (index) => {
   switch(index){
       case 0:
         return "MTN";
       case 1:
         return "GLO";
       case 2:
          return "AIRTEL";
       case 3:
           return "9MOBILE";
       default:
           return "INVALID"
   }
}

// isp finder function
const findISP = (event) =>{
       event.preventDefault();
       const phoneNumber = document.querySelector(".phone").value;
       if(phoneNumber.trim() == '' || phoneNumber.length != 11){
              showMessage('Enter a valid phone number');
              return false;
       }
       const prefix = phoneNumber.substr(0,4);
       let result = false;
       for(let index = 0;index < networkPrefixes.length;index++){
              result = networkPrefixes[index].includes(prefix);
              if(result){
                  let name = getName(index);
                  showMessage(`This phone number is ${name}`);
                   break;
              }
       }
       if(!result){ showMessage("This phone number is invalid") }
       event.target.reset();
}

const FORM = document.querySelector(".form");

FORM.onsubmit = findISP;


