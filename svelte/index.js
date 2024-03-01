/** @type {import("prettier").Config} */
const config = {
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  plugins: ["prettier-plugin-svelte"],
};

export default config;
