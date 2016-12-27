// You cannot remove the parentheses on functions with no or multiple arguments, only ones with single arguments.

// You can remove the curly braces and return statement if you only have a single line of code in your function.

const name = "Andrew";

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => console.log("Bye " + name);
