function firstFunction() {
  return new Promise((resolve) => {
    resolve("First function resolved");
  });
}

function secondFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second function resolved after 1 second");
    }, 1000);
  });
}

async function mainFunction() {
  console.log(await firstFunction());
  console.log(await secondFunction());
  console.log("All done!");
}

mainFunction();
console.log("Main function called");



Main function called
First function resolved
Second function resolved after 1 second
All done!
