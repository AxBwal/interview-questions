1. 
function outerFunction() {
  let count = 0;
  
  return function innerFunction() {
    count++;
    console.log("Count:", count);
  };
}

const counter1 = outerFunction();
const counter2 = outerFunction();

counter1();
counter1();
counter2();
counter1();
counter2();


//Output:=
Count: 1
Count: 2
Count: 1
Count: 3
Count: 2

outerFunction() is called twice, creating two separate instances of the inner function (counter1 and counter2). Each instance has its own closure, meaning each has its own count variable.


----------------------------------------------------------------------------------

2.

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 2;
  }
});

console.log(result);


[ undefined, 4, undefined, 8, undefined ]


----------------------------------------------------------------------------------


3.

function greet(name = "Stranger") {
  console.log("Hello, " + name);
}

greet("Alice");
greet();
greet(undefined);
greet(null);


Hello, Alice
Hello, Stranger
Hello, Stranger
Hello, null

----------------------------------------------------------------------------------



