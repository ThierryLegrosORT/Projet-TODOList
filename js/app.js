const myTaskList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myTaskList.length; i++) {
    const button = document.createElement("button");
    const btn = document.createTextNode("x");
    button.className = "close";
    button.appendChild(btn);
    myTaskList[i].appendChild(button);
}

const close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

function NewAdd(entreeText) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const todo = document.entree;

    listeActuelle.appendChild(li);
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.textContent = todo;

}