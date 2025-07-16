const { log } = require("console");
const http = require("http")

//  WEB Server

const server = http.createServer((req, res) => {
     if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> I am Shivam Pandey and I am a Software Developer. Let's Begin! </h1>");
        res.end();
     }
     if (req.url === "/blog") {
        res.write(" In today's digital age, having a website is essential, whether you're a business owner, a freelancer, or simply someone with a passion you want to share with the world. Creating a website may seem daunting at first, but with the right guidance, it's a task anyone can accomplish. In this blog, I'll walk you through the steps to create your own website from scratch, regardless of your technical expertise. ");
        res.end();
     }
     if (req.url === "/source-code") {
        res.write(" If you want any kind of code the you go on My github profile and you can access any code. All code are free. <h1> Thank You! </h1> ");
        res.end();
     }
     if (req.url === "/about") {
        res.write(" Hi, I'm Shivam Pandey. A Full Stack Developer. I'm a Software Development Intern with experience in Python, Django, and Flask, and I have a passion for front-end development using HTML, CSS, and JavaScript. I'm also exploring cloud solutions with AWS, DevOps and diving into the MERN stack. I love building innovative web applications and constantly learning new technologies to enhance my skills. ");
        res.end();
     }
     if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/plain");
        res.write(" Contact me here Got a project in mind or just want to say hello? Feel free to reach out—I'm always excited to connect and discuss new opportunities! ");
        res.end();
     }
});

// const server = http.createServer();

const PORT = 8080;
server.listen (PORT, () =>{
    console.log(`Listening on PORT ${PORT}`);
    
});

