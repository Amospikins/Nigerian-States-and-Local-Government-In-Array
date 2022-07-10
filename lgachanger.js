var states = document.getElementById("states");
var lga = document.getElementById("lga");

function changeLga() {
    let statesvalue = states[states.selectedIndex].value;

    switch (statesvalue) {
        case "Abia":
            removeAll(lga);
            abia.forEach(lgaSelector);
            break
        case "Adamawa":
            removeAll(lga);
            adamawa.forEach(lgaSelector);
            break
        case "Akwa Ibom":
            removeAll(lga);
            akwaibom.forEach(lgaSelector);
            break
        case "Anambra":
            removeAll(lga);
            anambra.forEach(lgaSelector);
            break
        case "Adamawa":
            removeAll(lga);
            adamawa.forEach(lgaSelector);
            break
        case "Bauchi":
            removeAll(lga);
            bauchi.forEach(lgaSelector);
            break
        case "Bayelsa":
            removeAll(lga);
            bayelsa.forEach(lgaSelector);
            break
        case "Benue":
            removeAll(lga);
            benue.forEach(lgaSelector);
            break
        case "Borno":
            removeAll(lga);
            borno.forEach(lgaSelector);
            break
        case "Cross River":
            removeAll(lga);
            crossriver.forEach(lgaSelector);
            break
        case "Delta":
            removeAll(lga);
            delta.forEach(lgaSelector);
            break
        case "Ebonyi":
            removeAll(lga);
            ebonyi.forEach(lgaSelector);
            break
        case "Edo":
            removeAll(lga);
            edo.forEach(lgaSelector);
            break
        case "Ekiti":
            removeAll(lga);
            ekiti.forEach(lgaSelector);
            break
        case "Enugu":
            removeAll(lga);
            enugu.forEach(lgaSelector);
            break
        case "Gombe":
            removeAll(lga);
            gombe.forEach(lgaSelector);
            break
        case "Imo":
            removeAll(lga);
            imo.forEach(lgaSelector);
            break
        case "Jigawa":
            removeAll(lga);
            jigawa.forEach(lgaSelector);
            break
        case "Kaduna":
            removeAll(lga);
            kaduna.forEach(lgaSelector);
            break
        case "Kano":
            removeAll(lga);
            kano.forEach(lgaSelector);
            break
        case "Katsina":
            removeAll(lga);
            katsina.forEach(lgaSelector);
            break
        case "Kebbi":
            removeAll(lga);
            kebbi.forEach(lgaSelector);
            break
        case "Kogi":
            removeAll(lga);
            kogi.forEach(lgaSelector);
            break
        case "Kwara":
            removeAll(lga);
            kwara.forEach(lgaSelector);
            break
        case "Lagos":
            removeAll(lga);
            lagos.forEach(lgaSelector);
            break
        case "Nasarawa":
            removeAll(lga);
            nasarawa.forEach(lgaSelector);
            break
        case "Niger":
            removeAll(lga);
            niger.forEach(lgaSelector);
            break
        case "Ogun":
            removeAll(lga);
            ogun.forEach(lgaSelector);
            break
        case "Ondo":
            removeAll(lga);
            ondo.forEach(lgaSelector);
            break
        case "Osun":
            removeAll(lga);
            osun.forEach(lgaSelector);
            break
        case "Oyo":
            removeAll(lga);
            oyo.forEach(lgaSelector);
            break
        case "Plateau":
            removeAll(lga);
            plateau.forEach(lgaSelector);
            break
        case "Plateau":
            removeAll(lga);
            plateau.forEach(lgaSelector);
            break
        case "Rivers":
            removeAll(lga);
            rivers.forEach(lgaSelector);
            break
        case "Sokoto":
            removeAll(lga);
            sokoto.forEach(lgaSelector);
            break
        case "Taraba":
            removeAll(lga);
            taraba.forEach(lgaSelector);
            break
        case "Yobe":
            removeAll(lga);
            yobe.forEach(lgaSelector);
            break
        case "Zamfara":
            removeAll(lga);
            zamfara.forEach(lgaSelector);
            break
    }
}


function lgaSelector(item) {
    let newOption = new Option(item, item);
    lga.add(newOption, undefined);
}

function removeAll(selectBox) {
    while (selectBox.options.length > 0) {
        selectBox.remove(0);
    }
}
changeLga();