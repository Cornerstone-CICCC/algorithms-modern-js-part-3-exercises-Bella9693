// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference.
// Use the rest operator to handle the variable number of arguments.
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  if (numbers.length === 0) return 0;

  return numbers.slice(1).reduce((acc, curr) => acc - curr, numbers[0]);
}

console.log(subtract(10, 2, 3)); // Example usage
