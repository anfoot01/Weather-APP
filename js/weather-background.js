//WEATHER BACKGROUND FUNCTIONS

function thunderBg() {
  body.style.backgroundImage = "url(../../source/img/thunderstorm.webp)";
  card.style.color = "white";
}
function rainBg() {
  document.body.style.backgroundImage = "url(../../source/img/rain.jpg)";
  const card = document.querySelector(".card");
  if (card) card.style.color = "white";

  if (!document.getElementById("rain-container")) {
    const rainContainer = document.createElement("div");
    rainContainer.id = "rain-container";
    rainContainer.style.position = "fixed";
    rainContainer.style.top = 0;
    rainContainer.style.left = 0;
    rainContainer.style.width = "100%";
    rainContainer.style.height = "100%";
    rainContainer.style.pointerEvents = "none";
    rainContainer.style.overflow = "hidden";
    rainContainer.style.zIndex = 9999;
    document.body.appendChild(rainContainer);

    setInterval(() => {
      for (let i = 0; i < 15; i++) {
        const drop = document.createElement("div");
        drop.style.position = "absolute";
        drop.style.width = "2px";
        drop.style.height = "15px";
        drop.style.background = "rgba(173, 216, 230, 0.6)";
        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.top = "-20px";
        drop.style.opacity = 1;
        drop.style.transition = "transform 1s linear, opacity 1s ease-out";

        rainContainer.appendChild(drop);

        setTimeout(() => {
          drop.style.transform = `translateY(${window.innerHeight}px)`;
          drop.style.opacity = 0;
        }, 10);

        setTimeout(() => {
          if (drop.parentElement) {
            drop.parentElement.removeChild(drop);
          }
        }, 3200);
      }
    }, 80);
  }
}

function cloudBg() {
  body.style.backgroundImage = "url(../../source/img/clouds.jpg)";
  card.style.color = "black";
}
function fogBg() {
  body.style.backgroundImage = "url(../../source/img/fog.jpg)";
  card.style.color = "white";
}
function sunBg() {
  body.style.backgroundImage = "url(../../source/img/sun.jpg)";
  card.style.color = "black";
}
function snowBg() {
  document.body.style.backgroundImage = "url(../../source/img/snow.jpg)";
  const card = document.querySelector(".card");
  if (card) card.style.color = "black";

  if (!document.getElementById("snow-container")) {
    const snowContainer = document.createElement("div");
    snowContainer.id = "snow-container";
    snowContainer.style.position = "fixed";
    snowContainer.style.top = 0;
    snowContainer.style.left = 0;
    snowContainer.style.width = "100%";
    snowContainer.style.height = "100%";
    snowContainer.style.pointerEvents = "none";
    snowContainer.style.overflow = "hidden";
    snowContainer.style.zIndex = 9999;
    document.body.appendChild(snowContainer);

    setInterval(() => {
      for (let i = 0; i < 10; i++) {
        const snowflake = document.createElement("div");
        const size = Math.random() * 10 + 1;

        snowflake.style.position = "absolute";
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.borderRadius = "50%";
        snowflake.style.background = "white";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = "-10px";
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        snowflake.style.transition = "transform 5s linear, opacity 5s ease-out";

        const offset = Math.random() * 100 - 50;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
          snowflake.style.transform = `translate(${offset}px, ${window.innerHeight}px)`;
          snowflake.style.opacity = 0;
        }, 10);

        setTimeout(() => {
          if (snowflake.parentElement) {
            snowflake.parentElement.removeChild(snowflake);
          }
        }, 6000);
      }
    }, 80); // Нові сніжинки кожні 300 мс
  }
}
