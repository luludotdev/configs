import type { OxfmtConfig } from "oxfmt";

const config: OxfmtConfig = {
  sortImports: { newlinesBetween: false },
  sortTailwindcss: { functions: ["clsx", "cn", "cva", "twMerge"] },
} satisfies OxfmtConfig;

export default config;
