const inquirer = require('inquirer');

inquirer
    .prompt([{
        type: 'Confirm',
        message: "Do you want to include the iframe.ts file?",
        name: "files",
        default: false,
    }])
    .then(answers => {
      console.log(answers);
    })
    .catch(error => {
        if (error.isTtyError) {
            //d
        } else {
            // Something else went wrong
        }
    });
