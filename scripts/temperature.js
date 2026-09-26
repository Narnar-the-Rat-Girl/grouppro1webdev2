// For Temperature Conversion 
const celsiusInput = document.getElementById('celsius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');
const fahrenheitButton = document.getElementById('fahrenheit-button');
const celsiusButton = document.getElementById('celsius-button');
const fahrenheitResult = document.getElementById('fahrenheit-result');
const celsiusResult = document.getElementById('celsius-result');


const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const convertCelsius = () => {
  let text = "";
  const celsius = celsiusInput.value.split(',');

  for(c of celsius) {
    c = Number(c);
    const fahrenheit = celsiusToFahrenheit(c);
    text += fahrenheit.toFixed(2) + " °F, ";
  }
    fahrenheitResult.textContent = text;
};
fahrenheitButton.addEventListener("click", convertCelsius);

const FahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const convertFahrenheit = () => {
  let text = "";
  const fahrenheit = fahrenheitInput.value.split(',');

  for(f of fahrenheit) {
    f = Number(f);
    const celsius = FahrenheitToCelsius(f);
    text += celsius.toFixed(2) + " °C, ";
  }
    celsiusResult.textContent = text;
};
celsiusButton.addEventListener("click", convertFahrenheit);