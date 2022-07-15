import './style.css';
import { getWeather } from './functions/getWeather';
import { changeBackground, displayWeather } from './functions/interface';

document.querySelector('#submit-button').addEventListener('click', async () => {
  try {
    const city = document.querySelector('#city').value;
    const weatherData = await getWeather(city);
    // if there was an error in weatherData throw the error here as well to stop the function
    if (!weatherData) {
      throw new Error("Couldn't get the weather from server.");
    }
    displayWeather(weatherData, city);
    changeBackground(weatherData);
    document.querySelector('#city').value = '';
  } catch (err) {
    console.log(err);
  }
});
