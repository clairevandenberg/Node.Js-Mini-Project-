const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// getUserInfomation ();

async function getUserInfomation() {
  try {
    const variables = await inquirer.prompt([
        {
        message: "What is your name:",
        name: "name"
    },
    {
        message: "Where are you from?",
        name: "location"
    },
    {
        message: "What is your favourite food?",
        name: "food"
    },
    {
        message: "What is your favourite hobby?",
        name: "hobby"
    },
    {
        message: "Your Github username?",
        name: "git"
    },
    {
        message: "Your linkedIn URL?",
        name: "linkedIn"
    }
]);

console.log(variables);

writeFileAsync ('index.html',`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset= "UTF -8">
        <Meta http-equiv= "X-UA-Compatible" content= "ie=edge">
        <title> ${variables.name} </title>
    
    </head>
    <body>
    <h1> ${variables.name} </h1>
    <h1> ${variables.location}</h1>
    <h1> ${variables.hobby}</h1>
    <h1> ${variables.food}</h1>
    <h1> ${variables.git}</h1>
    <h1> ${variables.linkedIn}</h1>

    </body>
</html>`)

 
} catch (err) {
    console.log(err);
  }
}

getUserInfomation ();