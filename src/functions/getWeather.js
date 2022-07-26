async function getWeather(city) {
  try {
    // fetch weather info from other website with the city inside input
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed7a5619e14a98cd13e091aef92cc5ae`,
      { mode: 'cors' }
    );
    // check if server didn't throw an error
    if (!response.ok) {
      document.querySelector('#weatherText').innerText =
        'Couldn\t search for the city.';
      throw new Error('Bad response from server');
    }
    const data = await response.json();
    // round temperature to one decimal
    const temperature = Math.round((data.main.temp - 273.15) * 10) / 10;
    // text about weather conditions
    const weather = data.weather[0].main;
    return { temperature, weather };
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
