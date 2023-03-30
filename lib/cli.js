const inquirer = require('inquirer');
const shapes = require('./shapes')
// console.log(cirle)
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
                type: 'input',
                name: 'logoColor',
                message: 'Enter logo color.',
              },  
              {
                type: 'list',
                name: 'logoShape',
                message: 'pick a logo shape.',
                choices: ['circle', 'square','triangle'],
              }, 
        ]) 
        .then(({text,textColor,logoColor,logoShape})=>{
            const data = {text,textColor,logoColor,logoShape}
            // console.log(data);
            if (logoShape == 'circle') {
                console.log(logoShape)
                const circle = new shapes.Circle(text,textColor,logoColor)
                console.log(circle.render(text,textColor,logoColor))
            } else if (logoShape == 'square') {
                console.log(logoShape)
                const square = new shapes.Square(text,textColor,logoColor)
                console.log(square)
            } else if (logoShape == 'triangle') {
                console.log(logoShape)
                const triangle = new shapes.Triangle(text,textColor,logoColor)
                console.log(triangle)
            }
        })
    }
}

module.exports = CLI