import globals from "globals"
import js from "@eslint/js"
import ts from "typescript-eslint"
import react from "eslint-plugin-react"
import unocss from "@unocss/eslint-config/flat"
import prettier from "eslint-plugin-prettier/recommended"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  unocss,
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    rules: {
      /**
       * update config if you want:
       * https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#eslint
       */
      "no-undef": 0,
      "react/jsx-no-undef": 0,
    },
  },
  prettier,
]
