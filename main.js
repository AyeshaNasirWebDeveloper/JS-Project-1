let input = prompt("Please Enter Today's Weather in your Area:");
let weatherInfo = document.getElementById("weatherInfo");
let weatherImage = document.createElement("img");
let weatherCondition = document.createElement("p");

if (input !== null) {
    input = input.toLowerCase();
    if (input.includes("cloudy")) {
        weatherImage.src = "cloudy.png";
        weatherCondition.textContent = "Cloudy";
    } else if (input.includes("rain")) {
        weatherImage.src = "rain.jpg";
        weatherCondition.textContent = "Raining";
    } else if (input.includes("hot")) {
        weatherImage.src = "hot.jpg";
        weatherCondition.textContent = "Hot";
    } else if (input.includes("cold")) {
        weatherImage.src = "cold.jpg";
        weatherCondition.textContent = "Cold";
    } else if (input.includes("thunder")) {
        weatherImage.src = "thunder.jpg";
        weatherCondition.textContent = "Thunder Storm";
    }else {
    weatherImage.src = "emoji.png";
    weatherCondition.textContent = "Try again";
}

weatherImage.classList.add("weather-image");
weatherCondition.classList.add("weather-condition");

weatherInfo.innerHTML = "";
weatherInfo.appendChild(weatherImage);
weatherInfo.appendChild(weatherCondition);
}