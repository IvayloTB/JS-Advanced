function calculator() {
    let sum1;
    let sum2;
    let result;

    return {
        init: (num1, num2, result3,) => {
            sum1 = document.querySelector(num1);
            sum2 = document.querySelector(num2);
            result = document.querySelector(result3);

        },
        add: () => (result.value = +sum1.value + +sum2.value),
        subtract: () => (result.value = +sum1.value - +sum2.value)
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');