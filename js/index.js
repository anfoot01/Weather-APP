// WEATHER APP
//MAIN FILE

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "69cf6272d7ad24c46e6741f7f1ae75cf";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await getWeatherData();
      displayWeatherInfo(weatherData);
    } catch {
      // console.error(error);
      // displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const cityId = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${apiKey}`;
  const response = await fetch(apiUrl);

  //CHECK__404
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  console.log(response.ok);
  return await response.json();
}

function getWeatherBg(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return thunderBg();
    case weatherId >= 300 && weatherId < 400:
      return rainBg();
    case weatherId >= 500 && weatherId < 600:
      return rainBg();
    case weatherId >= 600 && weatherId < 700:
      return snowBg();
    case weatherId >= 700 && weatherId < 800:
      return fogBg();
    case weatherId === 800:
      return sunBg();
    case weatherId >= 801 && weatherId < 810:
      return cloudBg();
    default:
      return cloudBg();
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}




