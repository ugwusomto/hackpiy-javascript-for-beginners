/**
 *  1. What is a JavaScript object
 *  2. Create A Simple Student Object
 */

 const student1Obj = {
     name : "Jane Mykie",
     age : 23,
     class : "Grade 5",
     write : function(text){
       console.log(text)
     },
     sit:function(){
         console.log(`${this.name} just sat down`)
     }
 }

 const player = {
     accuracy : 30,
     speed : 50,
     agility : 500,
     pass : function(){
         console.log("Just Passed the ball")
     }
 }

 student1Obj.write("Hello am Jane");
 student1Obj.sit();
 console.log(student1Obj.name)



