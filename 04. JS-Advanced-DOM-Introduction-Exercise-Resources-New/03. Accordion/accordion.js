function toggle() {
    const result = document.getElementsByClassName("button")[0];
    const extraDiv = document.getElementById('extra');

    if (result.textContent === 'More') {
        result.textContent = 'Less';
        extraDiv.style.display = 'block';
    } else {
        result.textContent = 'More';
        extraDiv.style.display = 'none'
    }
}