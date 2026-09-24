const poundsInput = document.getElementById('pounds-input');
const kgInput = document.getElementById('kg-input');
const poundsButton = document.getElementById('pounds-button');
const kgButton = document.getElementById('kg-button');
const weightResult = document.getElementById('weight-result');


const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const KgConvert = () => {
    let text = "";
    const kilograms = kgInput.value.split(',');
    for(k of kilograms) {
        k = Number(k);
        const pounds = kilogramsToPounds(k);
        text += pounds.toFixed(2) + " lbs, ";

        
    }    
    weightResult.textContent = text;
};
poundsButton.addEventListener("click", KgConvert);

const poundsToKilograms = (pounds) => pounds / 2.20462;
const PoundsConvert = () => {


    
    const pounds = Number(poundsInput.value);
    const kilograms = poundsToKilograms(pounds);
    weightResult.textContent = kilograms.toFixed(2) + " kg";
};
kgButton.addEventListener("click", PoundsConvert);
