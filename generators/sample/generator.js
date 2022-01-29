module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a sample component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/sample/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../../src/sample/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../../src/sample/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../../src/sample/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/test.tsx.hbs",
      },
    ],
  });
};
