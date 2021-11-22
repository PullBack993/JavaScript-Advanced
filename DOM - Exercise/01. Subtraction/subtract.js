function subtract() {
  let fNum = Number(document.getElementById("firstNumber").value);
  let sNum = Number(document.getElementById("secondNumber").value);

  let resultDiv = document.getElementById("result");
  let result = fNum - sNum
  resultDiv.textContent = result
}
