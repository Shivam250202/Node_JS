
import https from 'https'
import readline from 'readline'
import chalk from 'chalk'

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout
})

const apiKey = '4afe4477352f5a7e868619c7';
const url = 'https://v6.exchangerate-api.com/v6/4afe4477352f5a7e868619c7/latest/USD';

const convertCurrency = (amount, rate) => {
    return amount * rate
}

https.get(url, (response) => {
    let data = "";

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end',() => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question('Enter the Amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g.- INR, EUR, NPR): ', (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(chalk.blue.bgGreen.bold(` ${amount} USD is approximately ${convertCurrency(amount, rate)}, ${currency}`));
                } else{
                    console.log(`Invalid Currency Code`);
                    
                }
                rl.close()
            })
        })
    })
})