function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  function generate() {
    const input = JSON.parse(document.querySelector('textarea').value);

    input.forEach((element) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const img = document.createElement('img');
      img.src = element.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      const p1 = document.createElement('p');
      const td2 = document.createElement('td');
      p1.textContent = element.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      const td3 = document.createElement('td');
      const p2 = document.createElement('p');
      p2.textContent = Number(element.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      const td4 = document.createElement('td');
      const p3 = document.createElement('p');
      p3.textContent = Number(element.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      const td5 = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);
    });
  }

  function buy() {
    const checkboxes = Array.from(document.querySelectorAll('tbody input')).filter((x) => x.checked);
    const bougth = [];
    let price = 0;
    let decoration = 0;
    checkboxes.forEach((element) => {
      const parent = element.parentElement.parentElement;
      const data = Array.from(parent.querySelectorAll('p'));
      bougth.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
   
    });
    const otput = document.querySelectorAll('textarea')[1];
    otput.textContent += `Bought furniture: ${bougth.join(', ')}\r\n`;
    otput.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    otput.textContent += `Average decoration factor: ${decoration / checkboxes.length}`;
  }

  
}
//[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
 //"price": 150, "decFactor": 1.2}]