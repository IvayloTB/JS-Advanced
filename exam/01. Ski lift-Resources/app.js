window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastnameInput = document.getElementById('last-name');
    const peopleCountinput = document.getElementById('people-count');
    const dateInInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');

    nextStepBtn.addEventListener('click', ticketPrevew)

    function ticketPrevew(event) {
        event.preventDefault();

        if (firstNameInput.value == '' || lastnameInput.value == "" ||
            dateInInput.value == '' || daysInput.value == '' || peopleCountinput.value == '' ||
            peopleCountinput.value <= 0) { return }

        const resvInfo = document.querySelector('.ticket-info-list')
        const li = document.createElement('li')
        li.setAttribute('class', 'ticket')
        const article = document.createElement('article');
        const h3 = document.createElement('h3')
        h3.innerHTML = `Name: ${firstNameInput.value} ${lastnameInput.value}`
        const p1 = document.createElement('p');
        p1.innerHTML = `From date: ${dateInInput.value}`
        const p2 = document.createElement('p')
        p2.innerHTML = `For ${daysInput.value} days`
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

        let firstName = firstNameInput.value
        let lastName = lastnameInput.value
        let dateIn = dateInInput.value
        let days = daysInput.value
        let peopleCount = peopleCountinput.value

        firstNameInput.value = '';
        lastnameInput.value = '';
        dateInInput.value = '';
        daysInput.value = '';
        peopleCountinput.value = '';
        nextStepBtn.disabled = true


        function backToEdit() {
            firstNameInput.value = firstName
            lastnameInput.value = lastName
            dateInInput.value = dateIn
            daysInput.value = days
            peopleCountinput.value = peopleCount
            resvInfo.removeChild(li)
            nextStepBtn.disabled = false
        }

        function contToNext() {
            const confRezv = document.querySelector('.confirm-ticket');
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
                const body = document.getElementById('body');
                const main = document.getElementById('main')
                body.removeChild(main)
                const h1 = document.createElement('h1')
                h1.setAttribute('id', 'thank-you');
                h1.textContent = "Thank you, have a nice day!";
                const backBtn = document.createElement('button');
                backBtn.setAttribute('id', 'back-btn')
                backBtn.textContent = 'Back';

                backBtn.addEventListener('click', back)
                body.appendChild(h1)
                body.appendChild(backBtn)

                function back(){
                    location.reload()
                }


            }

            function cancel() {
                confRezv.removeChild(li)
                nextStepBtn.disabled = false;
            }

        }
    }
}




