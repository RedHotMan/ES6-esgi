let table = document.createElement('table');
let rootDiv = document.getElementById('root');
let addLineBtn = document.createElement('button');
let addLineBtnText = document.createTextNode("ADD LINE");
addLineBtn.appendChild(addLineBtnText);

let saveBtn = document.createElement('button');
let saveBtnText = document.createTextNode('SAVE');

rootDiv.appendChild(table);
rootDiv.appendChild(addLineBtn);

function changeCellTxt (elem) {
  elem.addEventListener('click', function() {
    if (this.getElementsByTagName("input").length) return;
    let text = this.innerText;
    let input = document.createElement("input");
    input.value = text;
    this.innerText = "";
    this.appendChild(input);

    input.addEventListener("blur", function() {
      let value = this.value;
      let parent = this.parentNode;
      parent.removeChild(this);
      const text = document.createTextNode(value);
      parent.appendChild(text);
    });
  })
}

function addLineToTable() {
  let newLine = document.createElement('tr');
  for (let i = 0; i < 4; i++) {
    let newCell = document.createElement('td');
    const text = document.createTextNode("lorem ipsum");
    newCell.appendChild(text);
    changeCellTxt(newCell);
    newLine.appendChild(newCell);
  }
  table.insertBefore(newLine, table.children[0]);
  tableColor();
}

function tableColor() {
  for (let i = 0; i < table.getElementsByTagName("TR").length; i++) {
    let line = table.children;
    if (i % 2 === 0) {
      line[i].style.backgroundColor = "grey";
    }
    else {
      line[i].style.backgroundColor = "white";
    }
  }
}

for (let i = 0; i < 4; i++) {
  addLineToTable();
}

addLineBtn.addEventListener("click", function() {
  addLineToTable();
});

document.querySelectorAll('td').forEach((elem) => {
  changeCellTxt(elem);
});
