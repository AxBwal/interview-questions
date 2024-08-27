### what is use strict in js

`"use strict"` is a directive in JavaScript that enables **Strict Mode**, a feature introduced in ECMAScript 5 (ES5). Strict Mode imposes a stricter set of rules on your JavaScript code, helping you catch common coding mistakes and unsafe actions that could lead to bugs or unexpected behavior.

### Key Features of Strict Mode:
1. **Eliminates Silent Errors:** Converts some silent errors (like assigning to an undeclared variable) into throw errors, making them easier to debug.
2. **Prevents Accidental Globals:** In non-strict mode, assigning a value to an undeclared variable creates a global variable. Strict Mode prevents this by throwing an error if a variable is not declared before use.
3. **Disallows Duplicates:** It disallows duplicate parameter names in functions, which can cause confusion and errors.
4. **Prohibits `this` Binding to Global Object:** In functions, `this` is undefined in Strict Mode if not explicitly bound, rather than defaulting to the global object (`window` in browsers).
5. **Prevents Deleting Variables:** Strict Mode disallows deleting variables, functions, or function arguments, which can cause unexpected behavior.

### How to Use:
You can enable Strict Mode by placing `"use strict";` at the beginning of a script or a function. 

**Example:**

```javascript
"use strict";

function myFunction() {
  // In strict mode
  x = 3.14; // Throws an error because x is not declared
}
```

Alternatively, you can apply Strict Mode to specific functions:

```javascript
function myFunction() {
  "use strict";
  // Only this function is in strict mode
  y = 3.14; // Throws an error because y is not declared
}
```

### Benefits of Using `"use strict"`:
- Helps catch common coding mistakes.
- Makes your code safer and more predictable.
- Encourages best practices by enforcing stricter rules.

**Simple Definition:** `"use strict"` in JavaScript is a directive that enforces stricter rules on your code, helping you avoid common errors and write safer, more reliable programs.