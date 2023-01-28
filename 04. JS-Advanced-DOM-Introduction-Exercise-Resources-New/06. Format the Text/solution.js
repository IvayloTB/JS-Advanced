function solve() {
  const input = document.querySelector("#input").value;
  const output = document.getElementById('output')
  let sentences = input.split(".");

  for (let i = 0; i < sentences.length; i++) {
    const element = sentences[i];
    if (element.length <= 1) {
      sentences.splice(i, 1);
    }
  }

  for (i = 0; i < sentences.length; i += 3) {
    let out = [];
    for (j = 0; j < 3; j++) {
      if (sentences[i + j]) {
        out.push(sentences[i + j])
      }
    }
    let res = out.join(". ") + "."
    output.innerHTML += `<p>${res}</p>`

  }

}


