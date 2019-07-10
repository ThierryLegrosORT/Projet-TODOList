function compt() {
    // récupère le nombre de taches
    let x = document.getElementsByTagName("LI").length;
    document.getElementById("total").innerHTML = "<strong>" + x + "</strong>" + " tâches au total";

}