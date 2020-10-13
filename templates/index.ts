export const generateIndex = (indexName: string): string =>
  `export { ${indexName} } from './${indexName}';`;
