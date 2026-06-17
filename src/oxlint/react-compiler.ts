import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  plugins: ["react"],
  rules: {
    "react/react-compiler": "error",
  },
};

export default config;
