// This code is part of a Node.js module that uses the EventEmitter class to handle user-related events.
// It listens for events such as user login, purchase, update, and logout, and logs messages to the console when these events occur.
// The code also emits these events with sample data to demonstrate functionality.





const EventEmitter = require('events');
const emitter = new EventEmitter();

const eventCounts = {
    "user-login" = 0,
    "user-purchase" = 0,
    "user-update" = 0,
    "user-logout" = 0,
};



emitter.on("user-login", (username) => {
    console.log(`User ${username} has logged in.`);
   });

   
emitter.on("user-purchase", (purchase) => {
    console.log(`User you ${purchase} ${item} successfully`);
   });


emitter.on("user-update", (userUpdate) => {
    console.log(`User ${userUpdate} has been updated.`);
});


emitter.on("user-logout", (userLogout) => {
    console.log(`User ${userLogout} has logged out.`);
});



//    Emmit some enents
emitter.emit("user-login", "Shivam");
emitter.emit("user-purchase", "Shivam", "Laptop");
emitter.emit("user-update", "Shivam Pandey", "email");
emitter.emit("user-logout", "Shivam");



// Show the Summary of events
emitter.on("summary", () => {
    console.log("Summary event triggered.");
});
