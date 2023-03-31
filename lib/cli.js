const inquirer = require("inquirer");
const shapes = require("./shapes");
const fs = require("fs");

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
        // console.log(data);
        if (logoShape == "circle") {
          const circle = new shapes.Circle(text, textColor, logoColor);
          fs.writeFileSync("Cirlogo.svg", circle.render(), (err) =>
            err
              ? console.log(err)
              : console.log("Successfully created logo!")
          );
        } else if (logoShape == "square") {
          const square = new shapes.Square(text, textColor, logoColor);
          fs.writeFileSync("Sqrlogo.svg", square.render(), (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created logo!")
        );
        } else if (logoShape == "triangle") {
          const triangle = new shapes.Triangle(text, textColor, logoColor);
          fs.writeFileSync("Trilogo.svg", triangle.render(), (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created logo!")
        );
        }
      });
  }
}

module.exports = CLI;
