import markdown from "./plugins/markdown.ts";
import type { Config } from "https://deno.land/x/aleph@v0.3.0-alpha.29/types.ts";

export default (): Config => ({
  plugins: [
    markdown(),
  ],
});
