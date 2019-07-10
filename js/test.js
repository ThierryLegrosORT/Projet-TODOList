function compt() {
    // récupère le nombre de taches
    let x = document.getElementsByTagName("LI").length;

    // on récupère la div total
    const total = document.getElementById("total");

    // et lui donne un peu de contenu
    const newContent = document.createTextNode(x + " tâches au total");

    // ajoute le nœud texte au nouveau div créé
    total.appendChild(newContent);

    // on déplace l'élément div total et son contenu dans le DOM
    const currentDiv = document.getElementById('enCours');
    document.body.insertBefore(total, currentDiv);

}