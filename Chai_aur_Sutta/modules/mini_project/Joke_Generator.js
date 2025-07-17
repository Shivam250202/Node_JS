

import https from 'https'
import chalk from 'chalk'
import { url } from 'inspector';

const getJoke = () =>{
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    https.get(url, (response) => {
        let data = "";
        response.on('data', (chunk) => {
            data += chunk
        });
        response.on('end', () => {
            const joke = JSON.parse(data);
            // console.log(joke)
            console.log(`Here is random ${joke.type} Joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
            
        })

        response.on('error',(err) => {
            console.log(`Error fetching the joke, ${err.message}`);
            
        })
    })
}

getJoke();