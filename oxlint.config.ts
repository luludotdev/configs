import type { OxlintConfig } from "oxlint";
import { defineConfig } from "oxlint";
import { default as common } from "#/oxlint/common.ts";

const config: OxlintConfig = defineConfig({
  extends: [common],
});

export default config;
