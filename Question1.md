### Question 1:
Explain the difference between `let`, `const`, and `var` in JavaScript.



- **`var`**: 
  - `var` is function-scoped or globally scoped if not within a function. 
  - Variables declared with `var` can be re-declared and updated.
  - `var` is hoisted, meaning it is moved to the top of its scope before code execution, but it is initialized as `undefined`.

- **`let`**: 
  - `let` is block-scoped, meaning it is only accessible within the block it is defined in (e.g., inside `{}`).
  - Variables declared with `let` can be updated but not re-declared in the same scope.
  - `let` is hoisted, but unlike `var`, it is not initialized, leading to a "Temporal Dead Zone" until the variable is declared.

- **`const`**: 
  - `const` is also block-scoped like `let`.
  - Variables declared with `const` cannot be re-assigned; they must be initialized at the time of declaration.
  - While the reference to the value cannot change, the content of objects or arrays declared with `const` can still be modified.

 it's important to emphasize that `var` is function-scoped, whereas `let` and `const` are block-scoped. Additionally, `const` doesn't allow reassignment, but the contents of objects or arrays it holds can still be changed.

