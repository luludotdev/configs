# lulu configs

**warning:** pedantic and opinionated

## oxlint

```ts
// oxlint.config.ts
import { default as common } from "@luludev/configs/oxlint/common";
// import { default as node } from "@luludev/configs/oxlint/node";
// import { default as react } from "@luludev/configs/oxlint/react";
// import { default as vitest } from "@luludev/configs/oxlint/vitest";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [common],
});
```

## oxfmt

```ts
// oxfmt.config.ts
import { default as base } from "@luludev/configs/oxfmt";
import { merge } from "@luludev/configs/utils";
import { defineConfig } from "oxfmt";

const config = defineConfig({});

export default merge(base, config);
```
