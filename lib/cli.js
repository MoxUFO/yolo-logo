const inquirer = require('inquirer');
const shapes = require('./shapes')
console.log(shapes.Circle)
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

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
                name: 'textColor',
                message: 'Enter text color.',
              }, 
              {
                type: 'list',
                name: 'logoShape',
                message: 'pick a logo shape.',
                choices: ['cirlce', 'square','triangle'],
              },
              {
                type: 'input',
                name: 'logoColor',
                message: 'Enter logo color.',
              },   
        ]) 
        .then(({text,textColor,logoShape,logoColor})=>{
            const data = {text,textColor,logoShape,logoColor}
            console.log(data);
            return data
        })
    }
}

module.exports = CLI