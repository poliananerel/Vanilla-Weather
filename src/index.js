function updateData (response) {
let temperatureElement = document.querySelector ("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector ("#city");
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round (temperature);
}

function searchCity (city) {
let apiKey = "3fcbcf71bf84at645394b5ao7a59f3f0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get (apiUrl).then(updateData);
}


function searchSubmit (event) {
event.preventDefault ();
let searchInput = document.querySelector ("#search-input");
searchCity (searchInput.value);
}


let searchFormElement = document.querySelector ("#search-form");
searchFormElement.addEventListener ("submit", searchSubmit);
