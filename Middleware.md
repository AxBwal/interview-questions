### What are middleware and how to use them? Create a middleware to handle the errors without using trycatch

Middleware in Express.js are functions that execute during the lifecycle of a request to the server. They have access to the `request`, `response`, and `next` objects and can either terminate the request-response cycle or pass control to the next middleware in the stack using the `next()` function. Middleware functions are commonly used for tasks like logging, authentication, parsing JSON bodies, and error handling.

### Creating a Middleware for Error Handling

You can create a global error-handling middleware in Express.js without using `try-catch` blocks. Here’s an example:

1. **Error-Handling Middleware**: This middleware catches any errors that occur during the request lifecycle and sends a consistent error response to the client.

```javascript
// errorMiddleware.js
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Logs the error stack trace

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;
```

2. **Using the Middleware**: In your Express app, you can include this middleware at the end of all your routes so that it catches any errors that occur.

```javascript
const express = require('express');
const app = express();
const errorHandler = require('./errorMiddleware');

// Your routes here
app.get('/', (req, res) => {
  // Simulating an error
  throw new Error('Something went wrong!');
});

// Use the error-handling middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Explanation
- **Error Propagation**: If any middleware or route handler throws an error, it is automatically passed to the error-handling middleware because it has four arguments (`err`, `req`, `res`, `next`), which is a special signature in Express for error-handling middleware.
- **No `try-catch` Needed**: Since the error-handling middleware catches all errors, you don’t need `try-catch` blocks in every route.

This approach ensures that your API returns consistent error messages and statuses, making debugging and client handling much easier.