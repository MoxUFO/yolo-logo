const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {

    run(){
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text for the logo. (Must not be more than 3 characters.)',
                validate: (text) => text.length <= 3 || 'The logo text must be 3 or less characters'
              },
              {
                type: 'input',
                name: 'textcolor',
                message: 'Enter text color.',
              }, 
              {
                type: 'list',
                name: 'logoshape',
                message: 'pick a logo shape.',
                choices: ['cirlce', 'square','triangle'],
              },
              {
                type: 'input',
                name: 'logocolor',
                message: 'Enter logo color.',
              },   
        ])
    }
}

module.exports = CLI