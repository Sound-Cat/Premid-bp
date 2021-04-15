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
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });