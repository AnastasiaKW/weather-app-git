let currentTime = new Date();
let h2 = document.querySelector("#date");
let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[currentTime.getMonth()];
let day = days[currentTime.getDay()];
let date = currentTime.getDate();
let year = currentTime.getFullYear();
let hour = currentTime.getHours();
let min = currentTime.getMinutes();

h2.innerHTML = `${day}, ${month} ${date} ${year}, ${hour}:${min}`;

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

// Bonus Feature
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = `${cityInput.value}`;
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", getCity);

//week 5. display city name & current temp.

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let showTemperature = document.querySelector("#temperature");
  showTemperature.innerHTML = `${temperature}`;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = `${response.data.name}`;
}

function getCity(event) {
  event.preventDefault();
  let apiKey = "0ca86a6dbeb8f01289e9c396e6dc56da";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

//current button
function showPosition(position) {
  let apiKey = "0ca86a6dbeb8f01289e9c396e6dc56da";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
