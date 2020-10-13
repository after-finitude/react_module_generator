import { createModule } from "./createModule.ts";
import { prompts } from "./prompt.ts";

const main = async () => {
  const results = await prompts();

  createModule(results);
};

main();
