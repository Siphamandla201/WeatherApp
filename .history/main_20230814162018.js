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

form.addEventListener("submit", (e) => {
    if(search.ariaValueMax.length === 0) {
        alert("Please type in a city name");
    }else {
        cityInput = search.ariaValueMax;

        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }

    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

const apiKey = "2ebf299735d4454292a141442231408"

function fetchWeatherData() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`)

    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.current.temp
    })
}