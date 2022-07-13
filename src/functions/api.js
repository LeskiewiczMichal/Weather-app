async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed7a5619e14a98cd13e091aef92cc5ae`,
      { mode: 'cors' },
    );
    const data = await response.json();
    const 
    console.log(data.main.temp);
    console.log(data.weather[0].main);
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
