/*
 * This is a basic example of a test server which uses a `Deno.Reader` as the
 * body response.
 */

// Importing some console colors
import {
  bold,
  yellow,
} from "https://deno.land/std@0.53.0/fmt/colors.ts";
import { StringReader } from "https://deno.land/std@0.53.0/io/readers.ts";

import { Application } from "../mod.ts";

const app = new Application();

app.use(async (ctx) => {
  ctx.response.body = new StringReader("Hello, Reader!");
  ctx.response.type = "text/plain";
});

const options = { hostname: "127.0.0.1", port: 8000 };
console.log(
  bold("Start listening on ") + yellow(`${options.hostname}:${options.port}`),
);
await app.listen(options);
console.log(bold("Finished."));
