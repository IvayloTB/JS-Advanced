window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastnameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const peopleCountinput = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const yourRezvIs = document.getElementById('verification')

    nextBtn.addEventListener('click', reservationInfo)

    function reservationInfo(event) {
        event.preventDefault();

        if (firstNameInput.value == '' || lastnameInput.value == "" ||
            dateInInput.value == '' || dateOutInput.value == '' || peopleCountinput.value == '' ||
            new Date(dateInInput.value) >= new Date(dateOutInput.value) || peopleCountinput.value <= 0) { return }

        const resvInfo = document.querySelector('.info-list')
        const li = document.createElement('li')
        li.setAttribute('class', 'reservation-content')
        const article = document.createElement('article');
        const h3 = document.createElement('h3')
        h3.innerHTML = `Name: ${firstNameInput.value} ${lastnameInput.value}`
        const p1 = document.createElement('p');
        p1.innerHTML = `From date: ${dateInInput.value}`
        console.log(p1);
        const p2 = document.createElement('p')
        p2.innerHTML = `To date: ${dateOutInput.value}`
        const p3 = document.createElement('p')
        p3.innerHTML = `For ${peopleCountinput.value} people`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.addEventListener('click', backToEdit);
        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', contToNext);
        continueBtn.setAttribute('class', 'continue-btn');

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        resvInfo.appendChild(li);

        let furstName = firstNameInput.value
        let lastName = lastnameInput.value
        let dateIn = dateInInput.value
        let dateOut = dateOutInput.value
        let peopleCount = peopleCountinput.value

        firstNameInput.value = '';
        lastnameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        peopleCountinput.value = '';
        nextBtn.disabled = true

        function backToEdit() {
            firstNameInput.value = furstName
            lastnameInput.value = lastName
            dateInInput.value = dateIn
            dateOutInput.value = dateOut
            peopleCountinput.value = peopleCount
            resvInfo.removeChild(li)
            nextBtn.disabled = false
        }

        function contToNext() {
            const confRezv = document.querySelector('.confirm-list');
            li.removeChild(editBtn);
            li.removeChild(continueBtn);
            confRezv.appendChild(li);
            const confirmBtn = document.createElement('button')
            confirmBtn.setAttribute('class', 'confirm-btn')
            confirmBtn.textContent = 'Confirm'
            confirmBtn.addEventListener('click', confirm)
            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel'
            cancelBtn.addEventListener('click', cancel)
            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn)
            resvInfo.removeChild(li);
        

            function confirm() {
                confRezv.removeChild(li)
                nextBtn.disabled = false;

                yourRezvIs.setAttribute('class', 'reservation-confirmed')
                yourRezvIs.textContent = 'Confirmed.'
            }

            function cancel() {
                confRezv.removeChild(li)
                nextBtn.disabled = false;

                yourRezvIs.setAttribute('class', 'reservation-cancelled');
                yourRezvIs.textContent = 'Cancelled.'
            }
        }
    }
}