import { createModule } from "./createModule.ts";
import { prompts } from "./prompts.ts";

async function main() {
  const results = await prompts();

  createModule(results);
}

main();
