### Write a program to do union and intersection of two array js


function union(arr1, arr2) {
  // Combine both arrays and use a Set to remove duplicates
  return [...new Set([...arr1, ...arr2])];
}

function intersection(arr1, arr2) {
  // Filter elements that are present in both arrays
  return arr1.filter(element => arr2.includes(element));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const unionResult = union(array1, array2);
const intersectionResult = intersection(array1, array2);

console.log("Union:", unionResult); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Intersection:", intersectionResult); // Output: [4, 5]
