// how can I use os module in Node JS
// Import the built-in 'os' module
const os = require('os');   
// Get system information
const systemInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    cpuCount: os.cpus().length,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime()
}
console.log('System Information:', systemInfo);
console.log(`System uptime: ${os.uptime()} seconds`); // Display system uptime
console.log(`Free memory: ${os.freemem()} bytes`); // Display free memory