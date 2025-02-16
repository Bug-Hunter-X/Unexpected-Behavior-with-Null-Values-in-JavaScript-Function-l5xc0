function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values by returning 0 (or another appropriate default)
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output 0