function validate() {
    const companyField = document.getElementById('companyInfo');
    const compCheck = document.getElementById('company');
    const form = document.getElementById('registerForm');

    compCheck.addEventListener("change", () => {
        if (compCheck.checked) {
            companyField.style.display = 'block'
        } else {
            companyField.style.display = 'none'
        }

    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userNameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passInput = document.getElementById('password');
        const rePassInput = document.getElementById('confirm-password');
        const compNumberInput = document.getElementById('companyNumber');

        const validField = document.getElementById('valid');

        const usernamePat = /^[a-zA-Z0-9]+$/;
        const passPat = /^[\w]+$/;
        const emailPat = /.*@.*\..*/;

        let usernameValid = false;
        let passValid = false;
        let rePassValid = false;
        let emailValid = false;
        let compNumValid = false;

        if (
            usernamePat.test(userNameInput.value) &&
            userNameInput.value.length >= 3 &&
            userNameInput.value.length <= 20
        ) {
            usernameValid = true;
        }

        if(emailPat.test(emailInput.value)){
            emailValid = true;
        }

        if (
            passPat.test(passInput.value) &&
            passInput.value.length >= 5 &&
            passInput.value.length <= 15 &&
            passInput.value === rePassInput.value
        ) {
            passValid = true;
            rePassValid = true;
        }

        if (compCheck.checked) {
            if (
                compNumberInput.value >= 1000 &&
                compNumberInput.value <= 9999
            ) {
                compNumValid = true;
            }
        } else {
            compNumValid = true;
        }
            
        if (usernameValid && passValid && rePassValid && emailValid && compNumValid) {
            validField.style.display = 'block'
        }else{
            validField.style.display = 'none'
        }

        if (!usernameValid) {
            userNameInput.style.borderColor = 'red';
        }else{
            userNameInput.style.border = 'none'
        }

        if (!passValid) {
            passInput.style.borderColor = 'red';
        }else{
            passInput.style.border = 'none'
        }

        if (!rePassValid) {
            rePassInput.style.borderColor = 'red';
        }else{
            rePassInput.style.border = 'none'
        }

        if (!emailValid) {
            emailInput.style.borderColor = 'red';
        }else{
            emailInput.style.border = 'none'
        }

        if (!compNumValid) {
            compNumberInput.style.borderColor = 'red';
        }else{
            compNumberInput.style.border = 'none'
        }
    })
}
