const inquirer = require('inquirer');

inquirer
    .prompt([{
        type: 'checkbox',
        message: "Which files do you want?",
        name: "files",
        choices: [
            new inquirer.Separator(' = Files = '),
            {
                name: "metadata.json",
                checked: true,
            },
            {
                name: "presence.ts",
                checked: true
            },
            {
                name: "tsconfig.json",
                checked: true
            },
            {
                name: "iframe.ts",
                checked: true
            }
        ]
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
