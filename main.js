"use strict";
const milesToKilometres = (miles) => miles * 1.609344;
/* Distance */
/* Kilos to miles */
const milesInput = document.getElementById("miles-input");
const milesButton = document.getElementById("miles-button");
const milesResult = document.getElementById("miles-result");
const handleMilesConvert = () => {
    const miles = Number(milesInput.value);
    const kilometres = milesToKilometres(miles);
    milesResult.textContent = kilometres.toFixed(2);
};
milesButton.addEventListener("click", handleMilesConvert);
