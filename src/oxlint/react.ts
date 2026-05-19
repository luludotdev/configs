import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  plugins: ["react"],
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type
    "react/button-has-type": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly
    "react/checked-requires-onchange-or-readonly": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps
    "react/exhaustive-deps": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forward-ref-uses-ref
    "react/forward-ref-uses-ref": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/hook-use-state
    "react/hook-use-state": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/iframe-missing-sandbox
    "react/iframe-missing-sandbox": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments
    "react/jsx-fragments": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key
    "react/jsx-key": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes
    "react/jsx-no-comment-textnodes": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props
    "react/jsx-no-duplicate-props": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url
    "react/jsx-no-script-url": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank
    "react/jsx-no-target-blank": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment
    "react/jsx-no-useless-fragment": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi
    "react/jsx-props-no-spread-multi": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key
    "react/no-array-index-key": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-clone-element
    "react/no-clone-element": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger
    "react/no-danger": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-find-dom-node
    "react/no-find-dom-node": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-namespace
    "react/no-namespace": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-react-children
    "react/no-react-children": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value
    "react/no-render-return-value": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs
    "react/no-string-refs": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc
    "react/no-this-in-sfc": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities
    "react/no-unescaped-entities": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/only-export-components
    "react/only-export-components": ["warn", { allowConstantExport: true }],
    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-function-component
    "react/prefer-function-component": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks
    "react/rules-of-hooks": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp
    "react/self-closing-comp": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object
    "react/style-prop-object": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children
    "react/void-dom-elements-no-children": "warn",
  },

  overrides: [
    {
      files: ["**/*.{tsx}"],
      rules: {
        // #region disable
        "react/jsx-no-undef": "off",
        // #endregion
      },
    },
  ],
} satisfies OxlintConfig;

export default config;
