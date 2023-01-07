module.exports = (plop) => {
  // controller generator
  plop.setGenerator("component", {
    description: "Create component files structure",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
      {
        type: "confirm",
        name: "shouldAddStyles",
        message: "Should add moduled styles?",
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [];

      actions.push({
        type: "add",
        path: "../components/{{name}}/{{name}}.tsx",
        templateFile: "./templates/components/component.tsx.hbs",
      });

      actions.push({
        type: "add",
        path: "../components/{{name}}/index.tsx",
        templateFile: "./templates/components/index.tsx.hbs",
      });

      if (data.shouldAddStyles) {
        actions.push({
          type: "add",
          path: "../components/{{name}}/style.module.css",
          templateFile: "./templates/components/style.module.css.hbs",
        });
      }

      return actions;
    },
  });

  plop.setGenerator("layout", {
    description: "Create layout files structure",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Layout name please (CamelCase)",
      },
      {
        type: "confirm",
        name: "shouldAddComponents",
        message: "Should add components folder used only in this layout?",
        default: true,
      },
      {
        type: "confirm",
        name: "shouldAddAuth",
        message: "This layout needs Authentication to be accessed?",
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [];

      actions.push({
        type: "add",
        path: "../layout/{{name}}/{{name}}.tsx",
        templateFile: "./templates/layouts/layout.tsx.hbs",
      });

      actions.push({
        type: "add",
        path: "../layout/{{name}}/index.tsx",
        templateFile: "./templates/layouts/index.tsx.hbs",
      });

      if (data.shouldAddComponents) {
        actions.push({
          type: "add",
          path: "../layout/{{name}}/components/Component.tsx",
          templateFile: "./templates/layouts/firstComponent.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../layout/{{name}}/components/index.tsx",
          templateFile: "./templates/layouts/componentsIndex.tsx.hbs",
        });
      }

      return actions;
    },
  });
};
