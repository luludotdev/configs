import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  plugins: ["react"],
  rules: {
    "react/error-boundaries": "error",
    "react/globals": "error",
    "react/immutability": "error",
    "react/incompatible-library": "error",
    "react/preserve-manual-memoization": "error",
    "react/purity": "error",
    "react/refs": "error",
    "react/set-state-in-effect": "error",
    "react/set-state-in-render": "error",
    "react/static-components": "error",
    "react/use-memo": "error",
    "react/unsupported-syntax": "error",
    "react/void-use-memo": "error",
    "react/no-deriving-state-in-effects": "error",
    "react/invariant": "warn",
    "react/rule-suppression": "warn",
    "react/syntax": "error",
    "react/todo": "warn",
    "react/capitalized-calls": "error",
    "react/exhaustive-effect-dependencies": "error",
    "react/hooks": "error",
    "react/memo-dependencies": "error",
  },
};

export default config;
