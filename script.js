const inputSearch = document.querySelector("input");
const searchBtn = document.querySelector("button");
const searchName = document.querySelector("#cityName");

searchBtn.addEventListener("click", () => {

    const APIkey = 'd4765560561e0ae6c80abc3c2c73f43f';
    const city = document.querySelector('button').value;

    if (city == '')
    return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {

    const image = document.querySelector('.live');
    const temprature = document.querySelector('#temp');
    const humidity = document.querySelector('#hum');
    const longetivity = document.querySelector('#long');

    switch (json.weather[0].main) {
        case 'clear':
            image.src = 'WeatherReport/clear.webp';
            break;

        case 'rain':
            image.src = 'WeatherReport/rain.webp';
            break;

        case 'cloud':
            image.src = 'WeatherReport/cloud.webp';
            break;

        case 'snow':
            image.src = 'WeatherReport/snow.webp';
            break;

        default:
            image.src = 'WeatherReport/clear.webp';

        }

    });

});