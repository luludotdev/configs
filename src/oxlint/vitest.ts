import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  env: { vitest: true },
  plugins: ["vitest"],
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-tests
    "vitest/no-conditional-tests": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-import-node-test
    "vitest/no-import-node-test": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-describe-function-title
    "vitest/prefer-describe-function-title": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-type-of
    "vitest/prefer-expect-type-of": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-importing-vitest-globals
    "vitest/prefer-importing-vitest-globals": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-object
    "vitest/prefer-to-be-object": "warn",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-awaited-expect-poll
    "vitest/require-awaited-expect-poll": "error",
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/warn-todo
    "vitest/warn-todo": "warn",
  },
} satisfies OxlintConfig;

export default config;
