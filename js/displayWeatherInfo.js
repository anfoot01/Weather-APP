//DATA

function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");
  const tipsDisplay = document.createElement("p");

  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay");
  card.appendChild(cityDisplay);

  tempDisplay.textContent = `${(temp - 272.15).toFixed(1)}°C `;
  tempDisplay.classList.add("tempDisplay");
  card.appendChild(tempDisplay);

  humidityDisplay.textContent = `Humidity: ${humidity} %`;
  humidityDisplay.classList.add("humidityDisplay");
  card.appendChild(humidityDisplay);

  descDisplay.textContent = description;
  descDisplay.classList.add("descDisplay");
  card.appendChild(descDisplay);

  weatherEmoji.textContent = getWeatherBg(id);
  weatherEmoji.classList.add("weatherEmoji");
  card.appendChild(weatherEmoji);
  
}