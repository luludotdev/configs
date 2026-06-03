import type { OxlintConfig } from "oxlint";
import { defineConfig } from "oxlint";
import { default as common } from "./src/oxlint/common.ts";

const config: OxlintConfig = defineConfig({
  extends: [common],
});

export default config;
