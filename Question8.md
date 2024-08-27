### What will be the output of the following JavaScript code?

function delayedGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}

async function greet() {
  console.log("Start");
  const message = await delayedGreeting();
  console.log(message);
  console.log("End");
}

greet();
console.log("Outside greet");



Output:= 
Start
Outside greet
Hello, World!
End
