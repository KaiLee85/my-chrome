API_KEY = "791bb9950e20b6f0410d531fbeb6d7c7";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you ar in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} ${Math.floor(
        data.main.temp
      )}<br>`;
    });
}

function onGeoError() {
  console.log("where are you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
