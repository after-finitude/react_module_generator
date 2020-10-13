export const generateJsComponent = (componentName: string): string =>
  `import React from 'react';

export const ${componentName} = () => {
  return null;
};
`;

export const generateTsComponent = (componentName: string): string =>
  `import React from 'react';

export const ${componentName}: React.FC = () => {
  return null;
};
`;
