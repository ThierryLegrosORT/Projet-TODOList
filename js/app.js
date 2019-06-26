const myTaskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTaskList.length; i++) {
    const button = document.createElement("button");
    const btn = document.createTextNode("x");
    button.className = "close";
    button.appendChild(btn);
    myTaskList[i].appendChild(button);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function NewAdd() {

}