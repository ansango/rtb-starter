module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a documentation file",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What type of doc file is this?",
        choices: [
          {
            name: "Readme",
            value: "readme",
          },
          {
            name: "System Design",
            value: "system",
          },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is your doc file name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/docs/{{type}}/{{pascalCase name}}.stories.mdx",
        templateFile: "templates/stories.mdx.hbs",
      },
    ],
  });
};
