import { formatDate } from "@/components/utils/helpers";
import { PageContent } from "../content-handler";

export const readmeContent: PageContent = {
  content: `
# 👋 Hey there, I'm Francesco!

> Turning caffeine into code since [REDACTED]

## 🎭 Who am I?

- 🦸‍♂️ By day: A mild-mannered developer
- 🦹‍♂️ By night: Also a developer (I really like coding, okay?)

## 💡 Things I occasionally think about

1. Why isn't there a \`!important!\` in CSS?
2. If I were a sorting algorithm, would I be bubble sort? (Please say no)
3. Is P = NP? (Spoiler: Maybe?)

## 🎲 Random facts about me

| Fact | Rating |
|------|--------|
| Can touch type | ⭐⭐⭐⭐⭐ |
| Can juggle | ⭐⭐ |
| Can juggle while typing | ❌ |

## 📜 My Programming Manifesto

\`\`\`cpp
while (true) {
  if (coffee->isEmpty()) {
    coffee->refill();
  } else {
    code();
  }
}
\`\`\`

## 🏆 Achievements

- [ ] Wrote "Hello, World!" in a _**SAFE**_ C++ program
- [x] Understood JavaScript's \`this\` keyword (This is a flex)
- [x] Found the perfect VS Code theme (until ${formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))})
- [ ] Completed a project without adding "just one more feature"

## 📚 Favorite Quotes

> "There are only two hard things in Computer Science: cache invalidation and naming things."
> 
> \- Phil Karlton

> "Why do programmers prefer dark mode? Because light attracts bugs!"
> 
> \- Anonymous

---

Remember: In case of fire, git commit, git push, then leave the building!


`
}