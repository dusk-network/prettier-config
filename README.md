# Dusk Prettier configuration

Prettier configs used by [Dusk](https://dusk.network/) JavaScript apps.

## Installation

```bash
npm i -D @dusk-network/prettier-config
```

## Usage

You need to use a `.prettierrc.js` file to import one or more of the configurations.

```js
import duskJsPrettierConfig from "@dusk-network/prettier-config/js";
import duskSveltePrettierConfig from "@dusk-network/prettier-config/svelte"; // For Svelte projects only

export default {
  ...duskJsPrettierConfig,
  ...duskSveltePrettierConfig, // For Svelte projects only
};
```
