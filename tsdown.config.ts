import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfig = defineConfig({
  tsconfig: true,
  entry: ["./src/oxfmt.ts", "./src/oxlint/*.ts", "./src/utils.ts"],
  platform: "neutral",
  deps: { onlyBundle: ["lodash.merge"] },
  exports: true,
  dts: true,
  sourcemap: true,
});

export default config;
