// You cannot remove the parentheses on functions with no or multiple arguments, only ones with single arguments.

// You can remove the curly braces and return statement if you only have a single line of code in your function.

const square = x => x * x;

const cube = x => square(x) * x;
