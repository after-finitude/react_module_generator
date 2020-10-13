import { Confirm, Input, prompt } from "./deps.ts";

export const prompts = async () =>
  await prompt([
    {
      name: "isTs",
      message: "Do you want to create TS module",
      type: Confirm,
    },
    {
      name: "name",
      message: "What's module name?",
      type: Input,
    },
    {
      name: "path",
      message: "What's path?",
      type: Input,
    },
  ]);
