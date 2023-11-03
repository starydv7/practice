const person = { name: "Alice" };

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, my name is Alice


//2nd examples
const person2={name:"Pawan"};
const person3={name:"Yadav"};


function greet(){
    console.log(`Hello my name ${this.name}`);

}
greet.call(person2);
greet.call(person3);

//this key refer to current context 

//merge two object in one
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log("merge",merged);



// Missing ODD number from array
function findMissingOddNumbers(arr) {
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  
  const missingOddNumbers = [];
  
  for (let i = minVal; i <= maxVal; i += 2) {
    if (!arr.includes(i)) {
      missingOddNumbers.push(i);
    }
  }
  
  return missingOddNumbers;
}

// Example usage:
const arr = [5, 7, 9, 11, 15, 17];
const missingOdd = findMissingOddNumbers(arr);
console.log("Missing odd number(s):", missingOdd);

