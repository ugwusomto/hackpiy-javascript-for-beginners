//concat()
//map()
//sort()
//push() && pop()
//unshift() && shift()
//filter()
//includes()
//reverse()
// splice()
// join()

const data1 = [1,2,3,4,5];
const data2 = ['james','pope','frank','manly','philip'];
const data3 = ['$$','@@','##','**','%%'];

//concat
const newArr = data1.concat(data2,data3);
// console.log(newArr);

//map
const newMappedArray = data1.map((item)=>(Math.pow(item,3)))
// console.log(newMappedArray)

//sort
// console.log(data2)
// data2.sort();
// console.log(data2)

//push and pop
// console.log(data2)
// data2.push("John");
// console.log(data2)
// data2.pop();
// console.log(data2)

//shift and unshift
// console.log(data2);
// data2.unshift("Peter");
// console.log(data2);
// data2.shift()
// console.log(data2)

//filter
const newFilteredArray = data1.filter((item)=>(item % 2  == 0))
// console.log(newFilteredArray);

//includes
// const anwers = data2.includes("James");
// console.log(anwers);

//reverse
// console.log(data2)
// data2.reverse();
// console.log(data2)

//splice
// console.log(data2)
// data2.splice(2,1,"Somto")
// console.log(data2)

//join
const newString = data2.join("-");
console.log(newString)





