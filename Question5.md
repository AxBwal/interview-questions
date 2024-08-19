### Question 5:
How does the `async` and `await` syntax work in JavaScript? Can you provide an example of how they are used?




### How `async` and `await` Work:
- **`async`**:
  - The `async` keyword is used to define a function that returns a `Promise`. Even if the function doesn’t explicitly return a `Promise`, JavaScript will automatically wrap the return value in a resolved `Promise`.
  - An `async` function allows you to write promise-based code as if it were synchronous, without the need for chaining `.then()` methods.

- **`await`**:
  - The `await` keyword is used to pause the execution of an `async` function until the `Promise` is resolved or rejected.
  - `await` can only be used inside an `async` function. It allows the code to wait for the `Promise` to resolve and returns the result, enabling a more readable and synchronous style of code.

### Example:
Here’s an example to illustrate how `async` and `await` work:

```javascript
// Simulating a promise-based function
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a 2-second delay
  });
}

// Using async and await
async function getData() {
  console.log("Fetching data...");

  try {
    const result = await fetchData(); // Waits until the promise is resolved
    console.log(result); // Logs: "Data fetched successfully!"
  } catch (error) {
    console.error("Error:", error); // Handles any errors
  }
}

getData();
```

### Explanation:
1. **`fetchData` Function**: This function simulates a delay using `setTimeout` and returns a `Promise` that resolves after 2 seconds.
2. **`getData` Function**: This function is marked as `async`, so it can use the `await` keyword. It calls `fetchData()` and waits for the promise to resolve before continuing execution.
3. **Error Handling**: The `try...catch` block is used to handle any errors that might occur during the `await` operation.

Using `async` and `await` makes asynchronous code easier to write and understand, as it eliminates the need for chaining `.then()` and `.catch()` methods.

Ready for the next question?