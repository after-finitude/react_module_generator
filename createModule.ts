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

const createModuleElement = (
  moduleName: string,
  path: string,
  ext: string,
  generateResult: string,
) =>
  Deno.writeTextFile(
    `${path}/${moduleName}.${ext}`,
    generateResult,
  );

export function createModule(
  results: Prompts,
) {
  const { name, path, isTs } = results;

  const updatedPath = `./${path}/${name}`;

  const ext = isTs ? "ts" : "js";
  const componentExt = isTs ? "tsx" : "jsx";

  ensureDir(updatedPath)
    .then(() =>
      createModuleElement("index", updatedPath, ext, generateIndex(name))
    )
    .then(() =>
      createModuleElement(
        name,
        updatedPath,
        componentExt,
        chooseComponentCreate(name, isTs),
      )
    )
    .then(() =>
      createModuleElement("utils", updatedPath, ext, generateUtils(name))
    )
    .then(() =>
      createModuleElement(
        "constants",
        updatedPath,
        ext,
        generateConstants(name),
      )
    );

  console.log(" ");
  console.info(`Module ${bold(name)} was created`);
}
