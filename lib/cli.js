//import files needed to run the app
const inquirer = require("inquirer");
const shapes = require("./shapes");
const fs = require("fs");
//CLI is a class with the method run() that initializes inquirer
class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 || "The logo text must be 3 or less characters",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter text color (or hex).",
        },
        {
          type: "input",
          name: "logoColor",
          message: "Enter logo color (or hex).",
        },
        {
          type: "list",
          name: "logoShape",
          message: "pick a logo shape.",
          choices: ["circle", "square", "triangle"],
        },
      ])
      .then(({ text, textColor, logoColor, logoShape }) => {
        const data = { text, textColor, logoColor, logoShape };
        // condition statement that check user input for shape choice and creates a new object according to the chpice
        //it then creates a svg logo file with stles being returned from the render() function
        if (logoShape == "circle") {
          const circle = new shapes.Circle(text, textColor, logoColor);
          fs.writeFileSync("logo.svg", circle.render(), (err) =>
            err
              ? console.log(err)
              : console.log("Successfully created logo!")
          );
        } else if (logoShape == "square") {
          const square = new shapes.Square(text, textColor, logoColor);
          fs.writeFileSync("logo.svg", square.render(), (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created logo!")
        );
        } else if (logoShape == "triangle") {
          const triangle = new shapes.Triangle(text, textColor, logoColor);
          fs.writeFileSync("logo.svg", triangle.render(), (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created logo!")
        );
        }
      });
  }
}
// export for the CLI class/object
module.exports = CLI;
