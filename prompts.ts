import { Confirm, Input } from "./deps.ts";

import { Prompts } from "./types.ts";

export async function prompts(): Promise<Prompts> {
  const isTs = await Confirm.prompt(
    { message: "Do you want to create TS module?", default: false },
  );
  const name = await Input.prompt(
    { message: "What's module name?", default: "Module" },
  );
  const path = await Input.prompt({ message: "What's path?", default: "./" });

  return {
    isTs,
    name,
    path,
  };
}
