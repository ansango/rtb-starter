const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
module.exports = (plop) => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("RTB Docs", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
  plop.setHelper("splitCapitalize", (text) => {
    return text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  plop.setHelper("lowercase", (text) => text.toLowerCase());
  plop.setGenerator("RTB Docs", {
    description: "Create a RTB Docs",
    prompts: [
      {
        type: "input",
        name: "type",
        message: "What is your doc section name?",
      },
      {
        type: "input",
        name: "name",
        message: "What is your doc file name?",
      },
    ],
    actions: () => {
      let actions = [];
      actions.push({
        type: "add",
        path: "../src/docs/{{lowercase type}}/{{pascalCase name}}.stories.mdx",
        templateFile: "./templates/docs/stories.mdx.hbs",
      });
      return actions;
    },
  });
};
