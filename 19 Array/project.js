
const studentsAge = [20,15,55,39,66,79,99];
//Question : Given the above array write a program to increament each student's age by 10 years 

// studentsAge[0] += 10;
// studentsAge[1] += 10;
// studentsAge[2] += 10;
// studentsAge[3] += 10;
// studentsAge[4] += 10;
// studentsAge[5] += 10;

for(let index = 0 ; index < studentsAge.length ; index++){
    studentsAge[index] += 10
}

console.log(studentsAge)


