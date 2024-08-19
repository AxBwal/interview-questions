What will be the output of the following JavaScript code?


async function fetchData() {
  console.log("Fetching data...");
  return "Data received";
}

async function processData() {
  console.log("Start processing");
  const data = fetchData();
  console.log("Processing data");
  console.log(await data);
  console.log("Data processed");
}

processData();
console.log("End of script");


output =>
Start processing
Fetching data...
Processing data
End of script
Data received
Data processed
