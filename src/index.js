var inquirer = require('inquirer');
inquirer
    .prompt([{
        type: 'checkbox',
        message: "Which files do you want?",
        name: "files",
        choices: [
            new inquirer.Separator(' = Files = '),
            {
                name: "metadata.json",
            },
            {
                name: "presence.ts",
            },
            {
                name: "tsconfig.json",
            },
            {
                name: "iframe.ts",
            }
        ]
    }])
    .then(answers => {

    })
    .catch(error => {
        if (error.isTtyError) {
            //d
        } else {
            // Something else went wrong
        }
    });