//merge two array
const arr1=[1,3,7,8,5,6];
const arr2=[5,9,7,7,6,5,4,3,];
const res=[...arr1,...arr2];
const result=res.sort();
console.log(result)

// const mapRes=result.map((item)=>{
//     el:item*2;
//     return el;
// })
// const resMap=mapRes();
// console.log("map",resMap);
// const forEachRes=result.forEach((el)=>el*2);

// console.log("forEach",forEachRes);

// const numbers = [1, 2, 3, 4, 5];
let sum = 0;
result.forEach((number) => {
  sum += number;
});
console.log("sum",sum); // Output: 15 (sum of all numbers in the array)

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  people.forEach((person) => {
    console.log(person.name); // Output: "Alice", "Bob", "Charlie"
  });
 

const mapRes=result.map((el)=>el*2);
console.log("map",mapRes);
const wordsMap = ["hello", "world"];
const uppercaseWords = wordsMap.map((word) => word.toUpperCase());
console.log(uppercaseWords); // Output: ["HELLO", "WORLD"]


const reduceFun=result.reduce((acc,curr)=>acc+curr,0);
console.log(reduceFun);


const filterFun=result.filter((item)=>item>2)
console.log(filterFun);
const words = ["Hello", " ", "world", "!"];
const concatenated = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(concatenated); // Output: "Hello world!"


// const maxArr=result.sort();
console.log("max",result.length-1);