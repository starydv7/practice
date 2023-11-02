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
