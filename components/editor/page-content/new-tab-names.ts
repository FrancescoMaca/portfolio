const funnyFileNames = [
  "it-works-trust-me.tsx",
  "why-is-this-undefined.ts",
  "todo-fix-later.tsx",
  "definitely-no-any.ts",
  "types-are-suggestions.tsx",
  "promise-to-fix-types.ts",
  "quantum-state-manager.tsx",
  "schroedingers-boolean.ts",
  
  "callback-hell-tourism-guide.js",
  "undefined-is-not-a-function.js",
  "array-of-promises.js",
  "this-is-undefined.js",
  "null-coalescing-chaos.js",
  "async-await-maybe.js",
  "recursion-recursion-recursion.js",
  "global-state-disaster.js",
  
  "please-dont-touch.ini",
  "but-on-my-machine-it-works.ini",
  "production-secrets.ini",
  "stack-overflow-copypaste.ini",
  "dont-delete-this.ini",
  "magic-numbers.ini"
];


export function getRandomFunnyFileName(): string {
  const randomIndex = Math.floor(Math.random() * funnyFileNames.length);
  return funnyFileNames[randomIndex];
}