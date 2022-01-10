function calculator() {
  let firstNumInput;
  let secondNumInput;
  let resultBox;

  function init(firstSelct, secondSelct, thirdSelct) {
    firstNumInput = document.querySelector(firstSelct);
    secondNumInput = document.querySelector(secondSelct);
    resultBox = document.querySelector(thirdSelct);
    console.log(firstNumInput, secondNumInput, resultBox);
  }

  return {
    init,
    add: () =>
      (resultBox.value = Number(firstNumInput.value) + Number(secondNumInput.value)),

    subtract: () =>
    (resultBox.value = Number(firstNumInput.value) - Number(secondNumInput.value)),
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
