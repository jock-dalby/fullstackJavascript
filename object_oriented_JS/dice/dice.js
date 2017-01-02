const dice = {
  sides: 6,
  roll: function () {
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
