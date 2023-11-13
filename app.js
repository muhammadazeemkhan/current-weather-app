onload();
async function onload() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=59d5356017e168aa0280e39d774e4b65`
  );
  console.log(response);
  const responseJson = await response.json();
  console.log(responseJson);

  const temp = Math.floor(responseJson.main.temp);
  console.log(temp);
  const temperature = document.querySelector("#Temp");
  temperature.innerHTML = `${temp}&#8451;`;

  const humidity = document.getElementById("humidity");
  const humidityValue = responseJson.main.humidity;
  humidity.innerHTML = `${humidityValue}%`;

  const wind = document.getElementById("wind");
  const windSpeed = Math.floor(responseJson.wind.speed);
  wind.innerHTML = `${windSpeed}km/hr`;

  const city = document.getElementById("city");
  const country = responseJson.sys.country;
  const cityName = responseJson.name;
  city.innerHTML = `${cityName}, ${country}`;

  const weatherCondition = responseJson.weather[0].main;
  const iconcode = responseJson.weather[0].icon;
  const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  const icon = document.getElementById("Condition");
  icon.src = iconurl;

  const weatherCond = document.getElementById("weathercond");
  weatherCond.innerHTML = weatherCondition;
}

async function weatherApp(event) {
  event.preventDefault();
  const input = document.getElementById("city-input");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=59d5356017e168aa0280e39d774e4b65`
  ).then((res) => res.json());
  console.log(response);

  const temp = Math.floor(response.main.temp);
  console.log(temp);
  const temperature = document.querySelector("#Temp");
  temperature.innerHTML = `${temp}&#8451;`;

  const humidity = document.getElementById("humidity");
  const humidityValue = response.main.humidity;
  humidity.innerHTML = `${humidityValue}%`;

  const wind = document.getElementById("wind");
  const windSpeed = Math.floor(response.wind.speed);
  wind.innerHTML = `${windSpeed}km/hr`;

  const city = document.getElementById("city");
  const country = response.sys.country;
  const cityName = response.name;
  city.innerHTML = `${cityName}, ${country}`;

  const weatherCondition = response.weather[0].main;
  const iconcode = response.weather[0].icon;
  const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  const icon = document.getElementById("Condition");
  icon.src = iconurl;

  const weatherCond = document.getElementById("weathercond");
  weatherCond.innerHTML = weatherCondition;
  input.value = null;
}

const currentTime = () => {
  const currentDate = new Date();

  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();
  var currentSecond = currentDate.getSeconds();
  var amPm = "AM";

  if (currentHour === 0) {
    currentHour = 12;
    amPm = "AM";
    // console.log(currentHour , amPm)
  } else if (currentHour > 0 && currentHour < 12) {
    currentHour = currentHour;
    amPm = "Am";
    // console.log(currentHour,amPm)
  } else if (currentHour > 12) {
    currentHour = currentHour - 12;
    amPm = "PM";
    // console.log(currentHour , amPm)
  } else if (currentHour === 12) {
    currentHour = currentHour;
    amPm = "PM";
  }

  const time = document.querySelector(".Time");
  time.innerHTML = `${currentHour}:${currentMinute}:${amPm}`;
};
currentTime();

setInterval(() => {
  currentTime();
}, 1000);
