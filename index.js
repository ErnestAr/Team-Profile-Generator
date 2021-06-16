const fs = require("fs");
const inquirer = require("inquirer");
const classes = require("./lib/classes.js");
let dataStore = [];

//Create manager
const inputManager = () => {
  console.log("Please enter manager info below.");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Enter email: ",
        name: "email",
      },
      {
        type: "input",
        message: "Enter id: ",
        name: "id",
      },
      {
        type: "input",
        message: "Enter officeNumber:",
        name: "officeNumber",
      },

      {
        type: "list",
        name: "class",
        message: "Create new Employee or quit?",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then((data) => {
      let newEmp = new classes.Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      let divEl = `
        <div class=" col-2 card">
                <h3> ${newEmp.getName()}<br> ${newEmp.getRole()}
                </h3>
                <p>ID: ${newEmp.getId()}</p>
                <p>Email: <a href="mailto:${newEmp.getEmail()}">${newEmp.getEmail()}</a></p>
                <p>Office number: ${newEmp.getOfficeNumber()}</p>
        </div>
      `;
      dataStore.push(divEl);
      switch (data.class) {
        case "Engineer":
          inputEng();
          break;
        case "Intern":
          inputInt();
          break;
        case "Quit":
          fs.writeFile("./dist/index.html", erate(data), (err) =>
            err ? console.error(err) : console.log("Success!")
          );
          dataStore.push(divEl);
          break;
        default:
          break;
      }
    });
};

//Create engineer
const inputEng = () => {
  console.log("Enter Engineer info below.");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Enter email",
        name: "email",
      },
      {
        type: "input",
        message: "Enter id",
        name: "id",
      },
      {
        type: "input",
        message: "Enter GitHub account: ",
        name: "github",
      },

      {
        type: "list",
        name: "class",
        message: "Create new Employee or quit?",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then((data) => {
      let newEmp = new classes.Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      let divEl = `
        <div class=" col-2 card">
                <h3> ${newEmp.getName()}<br> ${newEmp.getRole()}
                </h3>
                <p>ID: ${newEmp.getId()}</p>
                <p>Email: <a href="mailto:${newEmp.getEmail()}">${newEmp.getEmail()}</a></p>
                <p>Git: <a href="https://github.com/${newEmp.getGitHub()}">${newEmp.getGitHub()}</a></p>
        </div>
      `;
      dataStore.push(divEl);
      switch (data.class) {
        case "Engineer":
          inputEng();
          break;
        case "Intern":
          inputInt();
          break;
        case "Quit":
          fs.writeFile("./dist/index.html", erate(data), (err) =>
            err ? console.error(err) : console.log("Success!")
          );
          dataStore.push(divEl);
          break;
        default:
          break;
      }
    });
};

//Create Intern
const inputInt = () => {
  console.log("Enter Intern info below.");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Enter email: ",
        name: "email",
      },
      {
        type: "input",
        message: "Enter id: ",
        name: "id",
      },
      {
        type: "input",
        message: "Enter attended school: ",
        name: "school",
      },
      {
        type: "list",
        name: "class",
        message: "Create new Employee or quit?",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then((data) => {
      let newEmp = new classes.Intern(
        data.name,
        data.id,
        data.email,
        data.school
      );
      let divEl = `
        <div class=" col-2 card">
                <h3> ${newEmp.getName()}<br> ${newEmp.getRole()}
                </h3>
                <p>ID: ${newEmp.getId()}</p>
                <p>Email: <a href="mailto:${newEmp.getEmail()}">${newEmp.getEmail()}</a></p>
                <p>School: ${newEmp.getSchool()}</p>
        </div>
      `;
      dataStore.push(divEl);
      switch (data.class) {
        case "Engineer":
          inputEng();
          break;
        case "Intern":
          inputInt();
          break;
        case "Quit":
          fs.writeFile("./dist/index.html", erate(), (err) =>
            err ? console.error(err) : console.log("Success!")
          );
          dataStore.push(divEl);
          break;
        default:
          break;
      }
    });
};

// Create html
const erate = () => {
  htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./style/style.css">
        <title>Document</title>
    </head>
    <body>
        <header class="header">
            <h1>Team</h1>
        </header>
        <main class="row justify-content-center">   
                ${dataStore.join("")}
        </main>
    </body>
    </html>
    `;
  return htmlFile;
};

inputManager();
