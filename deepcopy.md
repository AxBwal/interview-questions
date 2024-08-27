 ### shallow copy and deep copy in js . How to implement it

In JavaScript, **shallow copy** and **deep copy** refer to different ways of copying objects or arrays.

### Shallow Copy:
A shallow copy creates a new object or array, but it only copies the references to the values of the original object. If the original object contains nested objects, only the references to those nested objects are copied, not the objects themselves. As a result, changes made to the nested objects in the copied object will also affect the original object.

**Example:**

```javascript
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3
```

### Deep Copy:
A deep copy creates a new object or array with all new values, including nested objects. This means that changes made to the copied object do not affect the original object, and vice versa.

**Example:**

```javascript
const original = { a: 1, b: { c: 2 } };

// Method to create a deep copy using JSON
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 3;
console.log(original.b.c); // Output: 2
```

### How to Implement Shallow Copy and Deep Copy:

1. **Shallow Copy Methods:**
   - **Using `Object.assign()`**:
     ```javascript
     const shallowCopy = Object.assign({}, original);
     ```
   - **Using the Spread Operator (`...`)**:
     ```javascript
     const shallowCopy = { ...original };
     ```

2. **Deep Copy Methods:**
   - **Using `JSON.stringify()` and `JSON.parse()`**:
     ```javascript
     const deepCopy = JSON.parse(JSON.stringify(original));
     ```
     Note: This method does not work well with functions, `undefined`, or `Date` objects.

   - **Using Recursion (for more complex cases):**
     ```javascript
     function deepClone(obj) {
       if (obj === null || typeof obj !== 'object') {
         return obj;
       }

       if (Array.isArray(obj)) {
         return obj.map(deepClone);
       }

       const clone = {};
       for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
           clone[key] = deepClone(obj[key]);
         }
       }
       return clone;
     }

     const deepCopy = deepClone(original);
     ```

**Simple Definitions:**
- **Shallow Copy:** A copy of an object that only duplicates the top-level properties, not nested objects.
- **Deep Copy:** A complete copy of an object, including all nested objects, creating entirely new references.