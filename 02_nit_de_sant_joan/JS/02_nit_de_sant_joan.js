window.onload = inici;

//Funcions perquè funcionin els inputs i el botó

function inici() {
    loadEstrelles();
    loadRadi();
    loadDistancia();
}

function updateNEstrelles() {
    var nEstrelles = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("p")[0].innerHTML = nEstrelles;
    localStorage.setItem("nEstrelles", nEstrelles);
}

function loadEstrelles() {
    var nEstrelles = document.getElementsByTagName("input")[0];
    nEstrelles.addEventListener("change", updateNEstrelles);
    //Si al localStorage no hi tenim res a l'HTML hi mostrarem el valor bàsic (525)
    if (localStorage.getItem("nEstrelles") == null) {
        document.getElementsByTagName("p")[0].innerHTML = nEstrelles.value;
        localStorage.setItem("nEstrelles", nEstrelles.value);
        //En cas contrari mostrem a l'HTML el nombre que tenim guardat a localStorage
    } else {
        document.getElementsByTagName("p")[0].innerHTML = localStorage.getItem("nEstrelles");
    }
    /**
     * El valor que es mostrarà al range serà el del localStorage
     * Si hi ha un valor, es posarà a l'alçada del valor
     * Si no hi ha valor es posarà al mig
     */
    nEstrelles.value = localStorage.getItem("nEstrelles");
}

function updateRadi() {
    var radi = document.getElementsByTagName("input")[1].value;
    document.getElementsByTagName("p")[1].innerHTML = radi;
    localStorage.setItem("radi", radi);
}

function loadRadi() {
    var radi = document.getElementsByTagName("input")[1];
    radi.addEventListener("change", updateRadi);
    //Si al localStorage no hi tenim res a l'HTML hi mostrarem el valor bàsic (4)
    if (localStorage.getItem("radi") == null) {
        document.getElementsByTagName("p")[1].innerHTML = radi.value;
        localStorage.setItem("radi", radi.value);
    } else {
        document.getElementsByTagName("p")[1].innerHTML = localStorage.getItem("radi");
    }
    radi.value = localStorage.getItem("radi");

}

function updateDistancia() {
    var distancia = document.getElementsByTagName("input")[2].value;
    document.getElementsByTagName("p")[2].innerHTML = distancia;
    localStorage.setItem("distancia", distancia);
}

function loadDistancia() {
    var distancia = document.getElementsByTagName("input")[2];
    distancia.addEventListener("change", updateDistancia);
    //Si al localStorage no hi tenim res a l'HTML hi mostrarem el valor bàsic (6)
    if (localStorage.getItem("distancia") == null) {
        document.getElementsByTagName("p")[2].innerHTML = distancia.value;
        localStorage.setItem("distancia", distancia.value);
    } else {
        document.getElementsByTagName("p")[2].innerHTML = localStorage.getItem("distancia");
    }
    distancia.value = localStorage.getItem("distancia");
}

function neteja() {
    localStorage.clear();
    location.reload();
}