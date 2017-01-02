function printNumber(number) {
  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

const button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
