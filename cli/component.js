const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
module.exports = (plop) => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("RTB Component", {
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
  plop.setGenerator("RTB Component", {
    description: "Create a RTB Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your Component name?",
      },
    ],
    actions: () => {
      let actions = [];
      actions.push({
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./templates/component/component.tsx.hbs",
      });
      actions.push({
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
        templateFile: "./templates/component/styles.ts.hbs",
      });
      actions.push({
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./templates/component/stories.tsx.hbs",
      });
      actions.push({
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./templates/component/test.tsx.hbs",
      });
      return actions;
    },
  });
};
