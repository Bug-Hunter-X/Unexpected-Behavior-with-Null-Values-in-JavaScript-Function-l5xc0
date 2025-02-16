# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a common error in JavaScript where null values are not explicitly handled, leading to unexpected behavior.  The `foo` function is designed to add two numbers but produces unexpected results when one or both input values are `null`.

## Bug
The original `bug.js` file contains the function with the error. When one or both inputs are `null`, the addition will likely fail.  The `bugSolution.js` shows how the issue is corrected. 

## Solution
The solution explicitly checks for `null` values before attempting the addition.  This prevents errors and ensures the function behaves as expected in all cases.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred text editor or IDE.
3. You can run it using a Node.js environment.  e.g., `node bug.js` and `node bugSolution.js`
