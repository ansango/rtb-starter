module.exports = (plop) => {
  plop.setHelper("lowercase", (text) => text.toLowerCase());
  plop.setGenerator("React Tailwind Blocks CLI", {
    description: "Create a React Tailwind Blocks CLI",
    prompts: [
      {
        type: "list",
        name: "kind",
        message: "What you want to create?",
        choices: [
          {
            name: "Component",
            value: "component",
          },
          {
            name: "Sample Component",
            value: "sample",
          },
          {
            name: "Docs",
            value: "docs",
          },
        ],
      },
      {
        type: "input",
        name: "type",
        message: "What is your doc section name?",
        when: (answers) => answers.kind === "docs",
      },
      {
        type: "input",
        name: "name",
        message: "What is your file name?",
      },
    ],
    actions: (data) => {
      let actions = [];

      if (data.kind === "component") {
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "./component/templates/component.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
          templateFile: "./component/templates/styles.ts.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
          templateFile: "./component/templates/stories.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
          templateFile: "./component/templates/test.tsx.hbs",
        });
      } else if (data.kind === "sample") {
        actions.push({
          type: "add",
          path: "../src/samples/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "./samples/templates/component.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/samples/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
          templateFile: "./samples/templates/styles.ts.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/samples/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
          templateFile: "./samples/templates/stories.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/samples/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
          templateFile: "./samples/templates/test.tsx.hbs",
        });
      } else if (data.kind === "docs") {
        actions.push({
          type: "add",
          path: "../src/docs/{{lowercase type}}/{{pascalCase name}}.stories.mdx",
          templateFile: "./docs/templates/stories.mdx.hbs",
        });
      } else {
        throw new Error("Unknown kind in", data);
      }

      return actions;
    },
  });
};
