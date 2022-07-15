function displayWeather(data, city) {
  // add text containing the city
  document.querySelector(
    '#weatherText'
  ).innerText = `The temperature in ${city} is`;
  // display the temperature
  document.querySelector('span').innerText = `${data.temperature.toString()}°C`;
  //   change info about weather according to one information from the website
  const weatherInfo = document.querySelector('span + p');
  if (data.weather === 'Clear') {
    weatherInfo.innerText = 'and the sky is clear.';
  } else if (data.weather === 'Clouds') {
    weatherInfo.innerText = 'and the sky is cloudy.';
  } else if (
    data.weather === 'Tornado' ||
    'Squall' ||
    'Ash' ||
    'Dust' ||
    'Sand' ||
    'Fog' ||
    'Haze' ||
    'Smoke' ||
    'Mist'
  ) {
    weatherInfo.innerText = 'and the weather is crazy.';
  } else if (data.weather === 'Snow') {
    weatherInfo.innerText = 'and it is snowing.';
  } else if (data.weather === 'Rain' || 'Drizzle') {
    weatherInfo.innerText = 'and it is raining.';
  } else if (data.weather === 'Thunderstorm') {
    weatherInfo.innerText = 'and there is a thunderstorm.';
  }
}

// changes background according to short information from the website
function changeBackground(data) {
  //   const background = document.querySelector('.wrapper');
  const background = document.querySelector('body');
  if (data.weather === 'Clear') {
    background.style.backgroundImage = 'url("../src/photos/clearSky.jpg")';
  } else if (data.weather === 'Clouds') {
    background.style.backgroundImage = 'url("../src/photos/clouds.jpg")';
  } else if (
    data.weather === 'Tornado' ||
    'Squall' ||
    'Ash' ||
    'Dust' ||
    'Sand' ||
    'Fog' ||
    'Haze' ||
    'Smoke' ||
    'Mist'
  ) {
    background.style.backgroundImage = 'url("../src/photos/crazy.jpg")';
  } else if (data.weather === 'Snow') {
    background.style.backgroundImage = 'url("../src/photos/snow.jpg")';
  } else if (data.weather === 'Rain' || 'Drizzle') {
    background.style.backgroundImage = 'url("../src/photos/rain.jpg")';
  } else if (data.weather === 'Thunderstorm') {
    background.style.backgroundImage = 'url("../src/photos/thunderstorm.jpg")';
  }
}

export { displayWeather, changeBackground };
