/* Distance section */
const miInput = document.getElementById('mi-input');
const kmInput = document.getElementById('km-input');
const miButton = document.getElementById('mi-button');
const kmButton = document.getElementById('km-button');
const kmResult = document.getElementById('km-result');
const miResult = document.getElementById('mi-result');


const kilometersToMiles = (kilometers) => kilometers * 0.621371;
const KmConvert = () => {
    let text = "";
    const kilometers = kmInput.value.split(',');
    for(k of kilometers) {
        k = Number(k);
        const mi = kilometersToMiles(k);
        text += mi.toFixed(2) + " mi, ";

        
    }    
    miResult.textContent = text;
};
miButton.addEventListener("click", KmConvert);

const milesToKilometers = (miles) => miles * 1.60934;
const MilesConvert = () => {
    let text = "";
    const miles = miInput.value.split(',');
    for (m of miles) {
        m = Number(m);
        const kilometers = milesToKilometers(m);
        text += kilometers.toFixed(2) + "kms, ";
    }
    kmResult.textContent = text;
};
kmButton.addEventListener("click", MilesConvert);