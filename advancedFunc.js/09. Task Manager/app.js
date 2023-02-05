function solve() {
    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    const [addSection, openSection, inProgSection, completeSection] = document.querySelectorAll('section');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', adToDo);

    function adToDo(event) {
        event.preventDefault();

        if (inputTask.value !== "" && inputDesc.value !== "" && inputDate.value !== "") {

            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.textContent = inputTask.value;
            const pDesc = document.createElement('p');
            pDesc.textContent = `Description: ${inputDesc.value}`;
            const pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${inputDate.value}`;
            const divBns = document.createElement('div');
            divBns.classList.add('flex');//asdfghjkl;
            const startBtn = document.createElement('button');
            startBtn.classList.add('green');
            startBtn.textContent = 'Start'
            startBtn.addEventListener('click', nextArticle)//havent add finc
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteFun);
            divBns.appendChild(startBtn);
            divBns.appendChild(deleteBtn);
            article.appendChild(h3);
            article.appendChild(pDesc);
            article.appendChild(pDate);
            article.appendChild(divBns);
            openSection.lastElementChild.appendChild(article)

            inputTask.value = "";
            inputDesc.value = "";
            inputDate.value = "";


            function deleteFun() {
                article.remove();
            }

            function nextArticle() {
                inProgSection.lastElementChild.appendChild(article)
                 startBtn.remove();
                const startBt = document.createElement('button');
                startBt.textContent = "Delete";
                startBt.className = 'red';
                startBt.addEventListener('click', deleteFun);
                divBns.appendChild(startBt);
                deleteBtn.remove();
                const delBtnToFin = document.createElement('button');
                delBtnToFin.textContent = 'Finish';
                delBtnToFin.className = 'orange';
                delBtnToFin.addEventListener('click', finArticle);
                divBns.appendChild(delBtnToFin)
            }

            function finArticle() {
                completeSection.lastElementChild.appendChild(article)
                divBns.remove()

            }
        }
    }
}