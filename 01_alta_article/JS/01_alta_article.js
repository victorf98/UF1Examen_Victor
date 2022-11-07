window.onload = inici;

function inici() {
    dropdown();
    loadCodi();
    loadEstanteria();
    loadForat();
    loadMides();
    loadPassadis();
    loadAlta();
    dropdownLocalització();
    loadEdifici();
}

function dropdown() {
    var families = ["EINES", "MOBLES", "TECNOLOGIA", "MAQUINES"];
    var select = document.getElementsByTagName("select")[0];
    families = families.sort();
    for (let i = 0; i < families.length; i++) {
        var fam = new Option(families[i], families[i]);
        select.appendChild(fam);
    }
}

function dropdownLocalització() {
    let poblacions = ["OLOST", "BANYOLES", "GIRONA", "BARCELONA", "FIGUERES", "RIPOLL", "CAMPRODON"];
    var select = document.getElementsByTagName("select")[1];
    poblacions = poblacions.sort();
    for (let i = 0; i < poblacions.length; i++) {
        var pob = new Option(poblacions[i], poblacions[i]);
        select.appendChild(pob);
    }
}

function comprovarCodi() {
    var codi = document.getElementsByTagName("input")[0].value;
    var select = document.getElementsByTagName("select")[0].value;
    codi = codi.substring(0,3).toLowerCase() + codi.substring(3, codi.length);
    var lletra = obtenirLletra(codi);
    
    var numeros_regex = "[0-9]{7}";
    var reg_codi = new RegExp("^" + select.substring(0, 3).toLowerCase() + "-" + numeros_regex + "-" + lletra + "$");
    
    if (reg_codi.test(codi)) {
        document.getElementsByTagName("img")[0].src = "../IMG/tick.png";
        return true;
    }else{
        document.getElementsByTagName("img")[0].src = "../IMG/creu.png";
        return false;
    }
}

function loadCodi() {
    var codi = document.getElementsByTagName("input")[0];
    codi.addEventListener("change", comprovarCodi);
}

function obtenirLletra(codi) {
    var numeros = parseInt(codi.substring(4, 11));
    switch (numeros % 10) {
        case 0:
            lletra = "A";
            break;
    
        case 1:
            lletra = "X";
            break;
        
        case 2:
            lletra = "M";
            break;
        case 3:
            lletra = "T";
            break;
            
        case 4:
           lletra = "B";
            break;

        case 5:
            lletra = "C";
            break;
    
        case 6:
            lletra = "S";
            break;
        
        case 7:
            lletra = "O";
            break;

        case 8:
            lletra = "P";
            break;
            
        case 9:
           lletra = "Z";
            break;

        default:
            lletra = ""
            break;
    }
    
    return lletra;
}

function comprovarMides(){
    var amplada = document.getElementsByTagName("input")[2].value;
    var llargada = document.getElementsByTagName("input")[3].value;
    var alçada = document.getElementsByTagName("input")[4].value;

    //comprovar contingut amplada
    var amplada_correcte = comprovarContingutMides(amplada);
    //comprovar contingut llargada
    var llargada_correcte = comprovarContingutMides(llargada);
    //comprovar contingut alçada
    var alçada_correcte = comprovarContingutMides(alçada);

    if (amplada_correcte && llargada_correcte && alçada_correcte) {
        document.getElementsByTagName("p")[0].innerHTML = amplada + " x " + llargada + " x " + alçada;
        return true;
    }else{
        document.getElementsByTagName("p")[0].innerHTML = "";
        return false;
    }
}

function comprovarContingutMides(mida) {
    //S'accepta numeros sense o amb decimals(amb coma o punt): 3 | 3,3 | 3.3
    if (/^(\d+|\d+\,\d+|\d+\.\d+)$/.test(mida)) {
        return true;
    }else{
        return false;
    }
}

function loadMides() {
    var mides = document.getElementsByTagName("div")[0];
    mides.addEventListener("change", comprovarMides);
}

function comprovarPassadis() {
    var passadis = document.getElementsByTagName("input")[5].value;
    var reg_passadis = new RegExp("^" + "P" + "-" + "[0-9]{2}" + "-" + "(E|D)"+ "$");
    if (reg_passadis.test(passadis)) {
        document.getElementsByTagName("img")[1].src = "../IMG/tick.png";
        return true;
    }else{
        document.getElementsByTagName("img")[1].src = "../IMG/creu.png";
        return false;
    }
}

function loadPassadis() {
    var passadis = document.getElementsByTagName("input")[5];
    passadis.addEventListener("change", comprovarPassadis);
}

function comprovarEstanteria() {
    var estanteria = document.getElementsByTagName("input")[6].value;
    var reg_estanteria = new RegExp("^" + "EST" + "\\+" + "[0-9]{2}" + "\\." + "[0-9]{2}"+ "$");
    if (reg_estanteria.test(estanteria)) {
        document.getElementsByTagName("img")[2].src = "../IMG/tick.png";
        return true;
    }else{
        document.getElementsByTagName("img")[2].src = "../IMG/creu.png";
        return false;
    }
}

function loadEstanteria() {
    var estanteria = document.getElementsByTagName("input")[6];
    estanteria.addEventListener("change", comprovarEstanteria);
}

function comprovarForat() {
    var forat = document.getElementsByTagName("input")[7].value;
    var reg_forat = new RegExp("^" + "[0-9]{2}" + "\\*" + "[A-Z]{3}" + "\\*" + "[0-9]{2}" + "\\\\" + "[0-9]{2}" + "$", "i");
    if (reg_forat.test(forat)) {
        document.getElementsByTagName("img")[3].src = "../IMG/tick.png";
        return true;
    }else{
        document.getElementsByTagName("img")[3].src = "../IMG/creu.png";
        return false;
    }
}

function loadForat() {
    var forat = document.getElementsByTagName("input")[7];
    forat.addEventListener("change", comprovarForat);
}

function donarAlta() {
    var familia = document.getElementsByTagName("select")[0].value;
    var codi = document.getElementsByTagName("input")[0].value;
    var nom = document.getElementsByTagName("input")[1].value;
    var caracteristiques = document.getElementsByTagName("p")[0].value;
    var passadis = document.getElementsByTagName("input")[5].value;
    var estanteria = document.getElementsByTagName("input")[6].value;
    var forat = document.getElementsByTagName("input")[7].value;
    var buit = new RegExp("^" + " *" + "$");

    if (comprovarCodi() && !buit.test(nom) && comprovarMides() && comprovarPassadis() && comprovarEstanteria() && comprovarForat()) {
        document.getElementsByTagName("h5")[0].innerHTML = "Família: " + familia;
        document.getElementsByTagName("h5")[1].innerHTML = "Codi: " + codi;
        document.getElementsByTagName("h5")[2].innerHTML = "Nom: " + nom;
        document.getElementsByTagName("h5")[3].innerHTML = "Caracteristiques: " + caracteristiques;
        document.getElementsByTagName("h5")[4].innerHTML = "Ubicació:";
        document.getElementsByTagName("p")[1].innerHTML = passadis + " | " + estanteria + " | " + forat        
    }else{
        document.getElementsByTagName("h5")[0].innerHTML = "Falta emplenar bé les dades!";
        document.getElementsByTagName("h5")[1].innerHTML = "";
        document.getElementsByTagName("h5")[2].innerHTML = "";
        document.getElementsByTagName("h5")[3].innerHTML = "";
        document.getElementsByTagName("h5")[4].innerHTML = "";
        document.getElementsByTagName("p")[1].innerHTML = "";
    }
}

function loadAlta() {
    var alta = document.getElementsByTagName("button")[0];
    alta.onclick = donarAlta;
}

function comprovarEdifici() {
    var codi = document.getElementsByTagName("input")[8].value;
    var select = document.getElementsByTagName("select")[1].value;
    codi = codi.substring(0,5).toLowerCase() + codi.substring(5, codi.length);
    
    var numeros_regex = "[0-9]{3}";
    var lletres = "[a-z]{2}";
    var reg_codi = new RegExp("^" + select.substring(0, 5).toLowerCase() + "\\+" + numeros_regex + "\\." + lletres + "$");
    
    if (reg_codi.test(codi)) {
        document.getElementsByTagName("img")[4].src = "../IMG/tick.png";
        return true;
    }else{
        document.getElementsByTagName("img")[4].src = "../IMG/creu.png";
        return false;
    }
}

function loadEdifici() {
    var codi = document.getElementsByTagName("input")[8];
    codi.addEventListener("change", comprovarEdifici);
}