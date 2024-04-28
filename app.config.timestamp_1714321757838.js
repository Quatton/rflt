// app.config.ts
import { defineConfig } from "@solidjs/start/config";
var app_config_default = defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
export {
  app_config_default as default
};
