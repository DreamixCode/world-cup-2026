import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "src/const.js"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // underline unused vars/imports
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Catch missing/undefined components in JSX (e.g. forgot to import)
      "no-undef": "error",

      // Best signal for “forgot to import component” in JSX
      "react/jsx-no-undef": "error",

      // Prevent false positives for JSX components (e.g. <Link />)
      "react/jsx-uses-vars": "warn",

      // Prefer warnings for style/cleanup rules in this repo
      "no-extra-boolean-cast": "warn",
    },
  },

  // TS/TSX support (needed for shadcn ui files)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // use TS-aware unused-vars so TS syntax parses cleanly
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // TS handles undefined identifiers better than no-undef
      "no-undef": "off",
      "no-extra-boolean-cast": "warn",
    },
  },
]);
