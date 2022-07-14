async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed7a5619e14a98cd13e091aef92cc5ae`,
      { mode: 'cors' },
    );
    const data = await response.json();

    const temperature = data.main.temp - 273.15;
    const weather = data.weather[0].main;
    return { temperature, weather };
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
