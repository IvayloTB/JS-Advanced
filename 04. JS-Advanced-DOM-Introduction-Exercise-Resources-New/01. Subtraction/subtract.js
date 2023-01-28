function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;

    const div = document.getElementById('result');
    const result = Number(firstNum) - Number(secondNum);
    div.textContent = result;

}