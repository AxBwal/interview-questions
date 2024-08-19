async function foo() {
  console.log("Inside foo");
  return "foo result";
}

async function bar() {
  console.log("Inside bar");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bar result");
    }, 2000);
  });
}

async function main() {
  console.log("Start main");
  
  const fooPromise = foo();
  const barPromise = bar();

  console.log(await fooPromise);
  console.log(await barPromise);
  
  console.log("End main");
}

main();
console.log("Outside main");



Start main
Inside foo
Inside bar
Outside main
foo result
(bar result after 2 seconds)
End main
