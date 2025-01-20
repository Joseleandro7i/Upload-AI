import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import { defineConfig } from "eslint-define-config"; // Importing the defineConfig function

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Include .tsx for React
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser", // Specify the parser for TypeScript
      parserOptions: {
        ecmaVersion: 2020, // or whatever version you prefer
        sourceType: "module",
      },
    },
    extends: [
      'plugin:@typescript-eslint/recommended', 
    ],

    plugins: {},
    rules: {},
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]);
