// This code is part of a Node.js module that uses the EventEmitter class to handle user-related events.
// It listens for events such as user login, purchase, update, and logout, and logs messages to the console when these events occur.
// The code also emits these events with sample data to demonstrate functionality.



const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

let eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "user-update": 0,
    "user-logout": 0,
};

// Load previous counts if file exists
try {
    const data = fs.readFileSync('eventCounts.json', 'utf8');
    eventCounts = JSON.parse(data);
} catch (err) {
    // File does not exist or is invalid, use default counts
}

emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;
    console.log(`User ${username} has logged in.`);
});

emitter.on("user-purchase", (username, item) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} you purchased ${item} successfully.`);
});

emitter.on("user-update", (username, field) => {
    eventCounts["user-update"]++;
    console.log(`${username} has been updated ${field}.`);
});

emitter.on("user-logout", (username) => {
    eventCounts["user-logout"]++;
    console.log(`User ${username} has logged out.`);
});

// Show the Summary of events and save to file
emitter.on("summary", () => {
    console.log(eventCounts);
    fs.writeFileSync('eventCounts.json', JSON.stringify(eventCounts, null, 2));
    console.log('Event counts saved to eventCounts.json');
});

// Emit some events
emitter.emit("user-login", "Shivam");
emitter.emit("user-purchase", "Shivam", "Laptop");
emitter.emit("user-update", "Shivam Pandey", "email");
emitter.emit("user-logout", "Shivam");

emitter.emit("summary");