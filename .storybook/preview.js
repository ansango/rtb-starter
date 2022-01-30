import "../src/tailwind.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  staticDirs: ["../assets"],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Readme",
        [
          "Introduction",
          "Getting Started",
          "Create a Component",
          "Test and Lint",
          "Build and Deploy",
          "Contributing",
        ],
        "Sample",
        "Components",
        ["Button"],
      ],
    },
  },
};
