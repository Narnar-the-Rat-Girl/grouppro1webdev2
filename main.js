/* Weight section */
const poundsInput = document.getElementById('pounds-input');
const kgInput = document.getElementById('kg-input');
const poundsButton = document.getElementById('pounds-button');
const kgButton = document.getElementById('kg-button');
const kgResult = document.getElementById('kg-result');
const lbResult = document.getElementById('lb-result');


const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const KgConvert = () => {
    let text = "";
    const kilograms = kgInput.value.split(',');
    for(k of kilograms) {
        k = Number(k);
        const pounds = kilogramsToPounds(k);
        text += pounds.toFixed(2) + " lbs, ";

        
    }    
    lbResult.textContent = text;
};
poundsButton.addEventListener("click", KgConvert);

const poundsToKilograms = (pounds) => pounds / 2.20462;
const PoundsConvert = () => {
    let text = "";
    const pounds = poundsInput.value.split(',');
    for (p of pounds) {
        p = Number(p);
        const kilograms = poundsToKilograms(p);
        text += kilograms.toFixed(2) + "kgs, ";
    }
    kgResult.textContent = text;
};
kgButton.addEventListener("click", PoundsConvert);

/* Distance section */