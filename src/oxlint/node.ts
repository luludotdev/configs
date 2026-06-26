import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  plugins: ["node"],
  rules: {
    "node/callback-return": "warn",
    "node/global-require": "warn",
    "node/handle-callback-err": "warn",
    "node/no-exports-assign": "error",
    "node/no-mixed-requires": "warn",
    "node/no-new-require": "error",
    "node/no-path-concat": "warn",
    "node/no-sync": "warn",
  },
};

export default config;
