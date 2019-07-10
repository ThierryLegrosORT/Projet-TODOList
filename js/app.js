    document.body.onload = compt;


    // Creation du bouton close
    const myTaskList = document.getElementsByTagName("li");
    let i;
    for (i = 0; i < myTaskList.length; i++) {
        const button = document.createElement("button");
        const btn = document.createTextNode("x");
        button.className = "close";
        button.appendChild(btn);
        myTaskList[i].appendChild(button);
    }

    // Action du bouton close si cliqué
    const close = document.getElementsByClassName("close");
    let j;

    for (j = 0; j < close.length; j++) {
        close[j].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }

    }
    // Ajout du ckeck
    const chk = document.querySelector('ul');
    chk.addEventListener('click', function(checked) {
        if (checked.target.tagName === 'LI') {
            checked.target.classList.toggle('checked');
        }
    }, false);

    // Ajout d'une tâche dans la liste
    function NewAdd() {
        const li = document.createElement('li');
        const todo = document.getElementById('entree').value;
        const temp = document.createTextNode(todo);

        li.appendChild(temp);

        if (todo === '') {
            alert("Vous devez entrer un texte");
        } else {
            document.getElementById("listeActuelle").appendChild(li);
            compt();
        }
        document.getElementById("entree").value = "";

        const button = document.createElement("button");
        const btn = document.createTextNode("xXx");

        button.className = "close";
        button.appendChild(btn);
        li.appendChild(button);


        for (j = 0; j < close.length; j++) {
            close[j].onclick = function() {
                const div = this.parentElement;
                div.style.display = "none";
            }
        }

    }
    // // Ajout d'une tâche dans la liste
    // function NewAdd() {
    //     const li = document.createElement('li').classList.toggle('hhh');
    //     const todo = document.getElementById('entree').value;
    //     const temp = document.createTextNode(todo);

    //     li.appendChild(temp);

    //     if (todo === '') {
    //         alert("Vous devez entrer un texte");
    //     } else {
    //         document.getElementById("listeActuelle").appendChild(li);
    //     }
    //     document.getElementById("entree").value = "";
    //     // compt();

    //     const button = document.createElement("button");
    //     const btn = document.createTextNode("xXx");

    //     button.className = "close";
    //     button.appendChild(btn);
    //     li.appendChild(button);


    //     for (j = 0; j < close.length; j++) {
    //         close[j].onclick = function() {
    //             const div = this.parentElement;
    //             div.style.display = "none";
    //         }
    //     }

    //     document.body.onload /*= compt*/ ;
    //     // récupère le nombre de taches
    //     let x = document.getElementById("hhh").length;
    //     // convertit le nb de taches en string
    //     // let t = x.toString();
    //     // crée un nouvel élément div
    //     var newDiv = document.createElement("div");
    //     // et lui donne un peu de contenu
    //     var newContent = document.createTextNode(x);
    //     // ajoute le nœud texte au nouveau div créé
    //     newDiv.appendChild(newContent);

    //     // ajoute le nouvel élément créé et son contenu dans le DOM
    //     var currentDiv = document.getElementById('compteur');
    //     document.body.insertBefore(newDiv, currentDiv);

    // }

    // function compt() {

    //     document.getElementById("total").textContent(x);
    // }

    // document.body.onload = compt;

    // function addElement() {
    // function compt() {
    //     // récupère le nombre de taches
    //     let x = document.getElementById("listeActuelle").length;
    //     // convertit le nb de taches en string
    //     let t = x.toString();
    //     // crée un nouvel élément div
    //     var newDiv = document.createElement("div");
    //     // et lui donne un peu de contenu
    //     var newContent = document.createTextNode(t);
    //     // ajoute le nœud texte au nouveau div créé
    //     newDiv.appendChild(newContent);

    //     // ajoute le nouvel élément créé et son contenu dans le DOM
    //     var currentDiv = document.getElementById('compteur');
    //     document.body.insertBefore(newDiv, currentDiv);
    // }