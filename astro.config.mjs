import { defineConfig, squooshImageService } from "astro/config";

import robots from "astro-robots";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://rmristow.com",
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), robots()],
  output: "static",
});
