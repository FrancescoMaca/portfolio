const funnyFileNames = [
  "totally-not-a-virus.exe",
  "secret-cookie-recipe.md",
  "definitely-not-passwords.txt",
  "quantum-cat-simulator.py",
  "unicorn-breeding-guide.docx",
  "time-machine-blueprint.pdf",
  "how-to-fold-spacetime.js",
  "intergalactic-meme-collection.zip",
  "ai-wrote-this-novel.epub",
  "self-aware-toaster-firmware.bin",
  "dragons-tax-returns.xlsx",
  "flux-capacitor-schematics.dwg",
  "penguins-world-domination-plan.ppt",
  "invisible-ink-viewer.html",
  "infinite-pizza-generator.py",
  "antimatter-sandwich-recipe.md",
  "black-hole-in-a-box.iso",
  "schrödinger's-todo-list.txt",
  "universe-42-travel-guide.epub",
  "mind-reading-api-docs.js"
];

export function getRandomFunnyFileName(): string {
  const randomIndex = Math.floor(Math.random() * funnyFileNames.length);
  return funnyFileNames[randomIndex];
}