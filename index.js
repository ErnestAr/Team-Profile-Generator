const fs = require('fs')
const inquirer = require('inquirer')
const classes = require("./lib/classes.js")



function init() {
    inquirer
  .prompt([
    {
        type: 'input',
        message:  "What's  the email",
        name: 'email',
    },
    {
    type: 'input',
    message: "whats the id",
    name: 'id',
    },
    {
    type: 'input',
    message: "what is name",
    name: 'instructions',
    },
    {
    type: 'list',
    name: 'class',
    message: "class?",
    choices: ['Enginee', 'son', 'e4', 'schoolar'],
    },
  ])
  .then((data) =>
  {
    fs.writeFile('./dist/index1.html', erate(data), (err) =>
    err ? console.error(err) : console.log('Success!')
   );
  }
  );
}

const erate = (data) => {
htmlFile =
`<!DOCTYPE html>
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

    </header>
    <main class="row justify-content-center">   
        <div class=" col-2 card">
            <h3>Jared <br>Engineer
            </h3>
            <p>ID: </p>
            <p>Email: <a href="http://">${data.email}</a></p>
            <p>Office number:</p>
        </div>
        <div class=" col-2 card">
            <h3>Jared <br> Engineer
            </h3>
            <p>ID: </p>
            <p>Email <a href="http://"></a></p>
            <p>Office number: <a href="http://"></a></p>
        </div>
    </main>
</body>
</html>
`

return htmlFile
}





init()