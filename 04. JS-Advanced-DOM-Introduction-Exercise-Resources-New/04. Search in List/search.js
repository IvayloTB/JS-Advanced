function search() {
   const towns = Array.from(document.querySelectorAll("#towns li"));
   const result = document.querySelector("#result");
   const searchText = document.querySelector("#searchText");

   let cnt = 0;

   towns.forEach(town => {
      if (town.textContent.includes(searchText.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = "underline";
         cnt++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = "none";
      }

   });
   result.textContent = `${cnt} matches found`;


}
