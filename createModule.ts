import { bold, ensureDir } from "./deps.ts";

import { Prompts } from "./types.ts";
import {
  generateConstants,
  generateIndex,
  generateJsComponent,
  generateTsComponent,
  generateUtils,
} from "./templates/mod.ts";

const chooseComponentCreate = (name: string, isTs: boolean) =>
  isTs ? generateTsComponent(name) : generateJsComponent(name);

export function createModule(
  results: Prompts,
) {
  const { name, path, isTs } = results;

  const updatedPath = `./${path}/${name}`;

  const fileExt = isTs ? "ts" : "js";
  const componentExt = isTs ? "tsx" : "jsx";

  ensureDir(updatedPath)
    .then(() =>
      Deno.writeTextFile(
        `${updatedPath}/index.${fileExt}`,
        generateIndex(name),
      )
    )
    .then(() =>
      Deno.writeTextFile(
        `${updatedPath}/${name}.${componentExt}`,
        chooseComponentCreate(name, isTs),
      )
    )
    .then(() =>
      Deno.writeTextFile(`${updatedPath}/utils.${fileExt}`, generateUtils(name))
    )
    .then(() =>
      Deno.writeTextFile(
        `${updatedPath}/constants.${fileExt}`,
        generateConstants(name),
      )
    );

  console.log(" ");
  console.info(`Module ${bold(name)} was created`);
}
