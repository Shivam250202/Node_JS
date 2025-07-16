// Enter the File Name:
// Enter the Content:

import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout
})

const fileCreation = () => {
    rl.question('Enter Your File Name: ', (filename) =>{
        rl.question('Enter The Content for File: ', (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.error(`Error while writing File: , ${err.message}`);                    
                } else {
                    console.log(`Your "${filename}.txt" created successfully!`)
                }
                rl.close();
            })
        })
    })
}

fileCreation();