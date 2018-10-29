let table = document.createElement('table');
table.setAttribute("id", "table");
let rootDiv = document.getElementById('root');

let addLineBtn = document.createElement('button');
let addLineBtnText = document.createTextNode("ADD LINE");
addLineBtn.setAttribute('id', 'addLine');
addLineBtn.appendChild(addLineBtnText);

let saveBtn = document.createElement('button');
let saveBtnText = document.createTextNode('SAVE');
saveBtn.setAttribute("id", "saveBtn");
saveBtn.appendChild(saveBtnText);

let clearBtn = document.createElement('button');
let clearBtnText = document.createTextNode('CLEAR');
clearBtn.appendChild(clearBtnText);
clearBtn.setAttribute('id', 'clearBtn');

rootDiv.appendChild(table);
rootDiv.appendChild(addLineBtn);
rootDiv.appendChild(saveBtn);
rootDiv.appendChild(clearBtn);

if (localStorage.length > 0) {
  table.innerHTML = localStorage.getItem("test");
}
else {
  for (let i = 0; i < 4; i++) {
    addLineToTable();
  }
}

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
  let newLine = table.insertRow(0);
  for (let i = 0; i < 4; i++) {
    let newCell = newLine.insertCell(0);
    newCell.innerHTML = "lorem ipsum";
    changeCellTxt(newCell);
    newLine.appendChild(newCell);
  }
  tableColor();
}

function tableColor() {
  for (let i = 0; i < table.children[0].getElementsByTagName("TR").length; i++) {
    let line = table.children[0].children[0];
    if (i % 2 === 0) {
      line.style.backgroundColor = "grey";
    }
    else {
      line.style.backgroundColor = "white";
    }
  }
}

document.querySelectorAll('td').forEach((elem) => {
  changeCellTxt(elem);
});


document.getElementById("addLine").addEventListener("click", function () {
  addLineToTable();
});

document.getElementById("clearBtn").addEventListener("click", function() {
  localStorage.clear();
});

document.getElementById("saveBtn").addEventListener("click", function () {
  localStorage.setItem("test", document.getElementById("table").innerHTML);
});