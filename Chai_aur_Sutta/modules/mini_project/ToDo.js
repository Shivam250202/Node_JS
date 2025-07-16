import { log } from "console";
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout
})

const todos = [];

const showMenu = () =>{
    console.log("\n 1: Add a Task - ");
    console.log("\n 2: View a Task - ");
    console.log("\n 3: Exit");
    rl.question("Choose an Option : ", handleInput)
    }

const handleInput = (option) =>{
    if (option === "1") {
        rl.question("Enter the Task : ", (task) => {
            todos.push(task);
            console.log("Task Added: ", task);
            showMenu()
        })
    }
    else if (option === "2") {
        console.log("\n Your ToDo List: ")
        todos.forEach((task, index) => {
            console.log(`${index+1}. ${task}`);
        })
        showMenu()
    }
    else if (option === "3") {
        console.log(`Good Bye`);
        rl.close();
        } else{
            console.log("Invalid Option. Please Enter Valid Option ");
            showMenu();
        }
    }
showMenu();