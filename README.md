# lulu configs

**warning:** pedantic and opinionated

## oxlint

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";

import { default as common } from "@luludev/configs/oxlint/common";
// import { default as react } from "@luludev/configs/oxlint/react";
// import { default as vitest } from "@luludev/configs/oxlint/vitest";

export default defineConfig({
  extends: [common],
});
```

## oxfmt

```ts
import { defineConfig } from "oxfmt";
import { default as config } from "@luludev/configs/oxfmt";

export default defineConfig({
  ...config,
});
```
