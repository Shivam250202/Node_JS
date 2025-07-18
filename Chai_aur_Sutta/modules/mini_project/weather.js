import readline from 'readline/promises'

const API_KEY = 'af5b7407c9a68a46ecb68d5c2fa4d9fb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
 
const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout
})

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not Found. Please check the city name.');
        }
        const weatherData = await response.json();
        
        console.log('\nWeather Information:');
        console.log(`\nCity: ${weatherData.name}`);
        console.log(`\nTemperature: ${weatherData.main.temp}°C`);
        console.log(`\nDescription: ${weatherData.weather[0].description}`);
        console.log(`\nHumidity: ${weatherData.main.humidity}%`);
        console.log(`\nWind Speed: ${weatherData.wind.speed} m/s\n`);
    } catch (error) {
        console.log(error);      
    }
}

const city = await rl.question('Enter a city name to get a Weather report:');
await getWeather (city);
rl.close();