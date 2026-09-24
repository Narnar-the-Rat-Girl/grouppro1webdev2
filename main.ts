const milesToKilometres = (miles: number): number => miles * 1.609344;

/* Distance */
/* Kilos to miles */
const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;

const handleMilesConvert = (): void => {
    const miles: string = Number(milesInput.value);
    const kilometres: number = milesToKilometres(miles);
    milesResult.textContent = kilometres.toFixed(2);
};

milesButton.addEventListener("click", handleMilesConvert)