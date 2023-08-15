const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.querySelector(".locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelector(".city");

let cityInput = "London";

cities.forEach((city) => {
    city.addEventListerner("click", (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();

        app.style.opacity = "0";
    });
})

form.addEventListener("submit", (e))