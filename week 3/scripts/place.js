const temperature = Number(document.querySelector("#temperature").dataset.celsius);
const windSpeed = Number(document.querySelector("#wind-speed").dataset.kph);
const windChillOutput = document.querySelector("#wind-chill");

function calculateWindChill(temperature, windSpeed) { return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C"; }

if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput.textContent = calculateWindChill(temperature, windSpeed);
}