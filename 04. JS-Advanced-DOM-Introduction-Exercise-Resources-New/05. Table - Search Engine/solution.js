function solve() {
   const input = document.querySelector("#searchField");
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      Array.from(document.querySelectorAll("tbody tr")).forEach(line => {
         if (line.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
            line.classList.add("select");
         } else {
            line.classList.remove("select");
         }

      });
      input.value = "";
   }
}