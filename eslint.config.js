import duskJsConfig from "@dusk-network/eslint-config";

export default [
  ...duskJsConfig,
  {
    files: ["eslint.config.js"],
    rules: {
      // eslint-plugin-import doesn't always resolve packages with "exports" cleanly.
      "import/no-unresolved": "off",
    },
  },
];
