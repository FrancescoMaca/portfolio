import { PageContent } from "../content-handler";

export const notFoundContent: PageContent = {
  content: `
// 404.tsx
try {
  const file = await FileSystem.findFile(currentPath);
  return file;
} catch (error) {
  throw new Error("File not found :(");
}
`,
  prettyContent: `
// 404.tsx

console.error('${new Date().toISOString()} [ERROR] Process Failed Successfully 🤔')

try {
  const file = await FileSystem.findRequestedFile(currentPath);
  if (!file) {
    // TODO: Implement better error handling
    // FIXME: File system seems to be on vacation
    throw new Error("HTTP 404: Reality.js failed to load");
  }
  return file;
} catch (error) {
  console.error("Caught in a classic 404 moment");
  
  // Emergency protocols activated
  const solutions = [
    "Have you tried turning it off and on again?",
    "Maybe the file is just taking a coffee break ☕",
    "Plot twist: The file exists in a parallel universe",
    "Good news: The bug has been promoted to a feature!"
  ];

  // For non-developers
  return "File not found 😢";
}

// End of line.
`};