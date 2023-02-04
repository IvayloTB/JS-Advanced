function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((btn) => {
        btn.addEventListener('click', dropMenu);

        function dropMenu(event) {
            const parent = event.target.parentElement;
            const lock = parent.querySelector('input[value="unlock"]');

            if (lock.checked) {
                const details = parent.querySelector('div');
                details.style.display === 'block' 
                ? details.style.display = 'none' 
                : details.style.display = 'block'

                event.target.textContent === 'Show more'
                ?event.target.textContent = 'Hide it'
                :event.target.textContent = 'Show more'


            }
        }
    })
}