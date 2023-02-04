function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputValue.value;
    menu.appendChild(option);
    inputText.value = "";
    inputValue.value = "";

}