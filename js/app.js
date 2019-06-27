const myTaskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTaskList.length; i++) {
    const button = document.createElement("button");
    const btn = document.createTextNode("x");
    button.className = "close";
    button.appendChild(btn);
    myTaskList[i].appendChild(button);
}

const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

function NewAdd() {

}