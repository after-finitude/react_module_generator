export const generateUtils = (utilName: string): string => {
  const utilNameToLowerCase = utilName.toLowerCase();

  return `export const ${utilNameToLowerCase} = () => {
  return null;
};
  `;
};
