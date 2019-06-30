function NewAdd() {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const todo = document.getElementById('entree').value;
    const myTaskList = document.getElementsByTagName("li");
    let i;
    const close = document.getElementsByClassName("close");
    let j;

    listeActuelle.appendChild(li);
    checkbox.type = 'checkbox';
    li.textContent = todo;
    li.appendChild(checkbox);

    for (i = 0; i < myTaskList.length; i++) {
        const button = document.createElement("button");
        const btn = document.createTextNode("x");
        button.className = "close";
        button.appendChild(btn);
        myTaskList[i].appendChild(button);
    }

    for (j = 0; j < close.length; j++) {
        close[j].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }

}