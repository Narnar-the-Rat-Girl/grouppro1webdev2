const poundsInput = document.getElementById('pounds-input');
const kgInput = document.getElementById('kg-input');
const poundsButton = document.getElementById('pounds-button');
const kgButton = document.getElementById('kg-button');
const weightResult = document.getElementById('weight-result');


const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const handleKgConvert = () => {
    const kilograms = Number(kgInput.value);
    const pounds = kilogramsToPounds(kilograms);
    weightResult.textContent = pounds.toFixed(2);
};
kgButton.addEventListener("click", handleKgConvert);

const poundsToKilograms = (pounds) => pounds / 2.20462;
const handlePoundsConvert = () => {
    const pounds = Number(poundsInput.value);
    const kilograms = poundsToKilograms(pounds);
    weightResult.textContent = kilograms.toFixed(2);
};
poundsButton.addEventListener("click", handlePoundsConvert);
