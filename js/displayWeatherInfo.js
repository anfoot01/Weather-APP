function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
    wind: { speed, deg }
  } = data;

  const card = document.querySelector(".card");
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay");
  card.appendChild(cityDisplay);

  const tempDisplay = document.createElement("p");
  tempDisplay.textContent = `${(temp - 272.15).toFixed(1)}°C`;
  tempDisplay.classList.add("tempDisplay");
  card.appendChild(tempDisplay);

  const humidityDisplay = document.createElement("p");
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.classList.add("humidityDisplay");
  card.appendChild(humidityDisplay);

  const windDisplay = document.createElement("p");
  windDisplay.textContent = `Wind: ${speed} m/s, ${deg}°`;
  windDisplay.classList.add("windDisplay");
  card.appendChild(windDisplay);

  const descDisplay = document.createElement("p");
  descDisplay.textContent = description;
  descDisplay.classList.add("descDisplay");
  card.appendChild(descDisplay);

  const weatherEmoji = document.createElement("p");
  weatherEmoji.textContent = getWeatherBg(id); // наприклад ☀️ або 🌧️
  weatherEmoji.classList.add("weatherEmoji");
  card.appendChild(weatherEmoji);
}
