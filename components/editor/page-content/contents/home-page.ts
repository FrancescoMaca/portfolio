import { PageContent } from "../content-handler";

export const homePage: PageContent = {
  content: `
// Francesco Macaluso's Portfolio

// Before starting, I wanted to thank whoever you are to be here!
// TIP: If you are a fellow coder you can toggle the options on the top-right to see some more easter egg, let me know if you catch them.
// 
// Warning: Since I suck at coding, I wanted to say that this version of the portfolio is only available on big screen devices.
//          Do you think I was good at this? ahah, I am not.

const first_name = 'Francesco'
const last_name = 'Macaluso'
const role = 'Student & Software Engineer'

// This is me :>
fetch('http://127.0.0.1:3000/get-profile-image')
  .then(res => [[ACTION:openImage]])
  .catch(error => console.log('The server refused to look at you'))

// My skills are like a tree - always growing and starving for balance! (you get it? tree as in the data structure! Ok sorry I'll stop)
const skills = [
  'Teamwork', 'Dedication', 'Analytical Skills',
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'C/C++/C#', 'Java', 'Flutter',
  'Git', 'Docker', 'MongoDB', 'Firebase'
  'Data Structures'
]

skills.pop() // Sshhh

// These are the main things happening to my life
const my_journey = [
  { year: 2017, milestone: 'Started game development with C# (Unity 2D) and C++' },
  { year: 2018, milestone: 'Focused on DSA and hardware technologies' },
  { year: 2020, milestone: 'Enrolled in IT institute, studied Java and C' }, // Good old days :(
  { year: 2022, milestone: 'Moved to Alligator City (aka Florida) Learned React, Tailwind, and Docker for deployment' }
]

const profiles: Map<string, string> = {
  'github': 'FrancescoMaca',
  'instagram': '@franky_maca',
  'linkedin': 'francesco_macaluso'
}

// 
// Wanna see more? 
// Click [[ACTION:seeMore]]
// 
console.log(\`Last updated: \${new Date().toISOString().split('T')[0]}\`) // ${new Date().toISOString().split('T')[0]}

console.log('Made with 💛 by Francesco Macaluso!')
`,
  prettyContent: `
// Francesco Macaluso's Portfolio

// Before starting, I wanted to thank whoever you are to be here!
// TIP: If you are a fellow coder you can toggle the options on the top-right to see some more easter egg, let me know if you catch them.
// 
// Warning: Since I suck at coding, I wanted to say that this version of the portfolio is only available on big screen devices.
//          Do you think I was good at this? ahah, I am not.

const firstName = 'Francesco'
const lastName = 'Macaluso'
const role = 'Student & Software Engineer' || 'Unemployed'

// This is me :>
fetch('http://127.0.0.1:3000/get-profile-image')
  .then(res => [[ACTION:openImage]])
  .catch(error => console.log('The server refused to look at you'))

// My skills are like a tree - always growing and starving for balance! (you get it? tree as in the data structure! Ok sorry I'll stop)
const skills = [
  'Teamwork', 'Dedication', 'Analytical Skills',
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'C/C++/C#', 'Java', 'Flutter',
  'Git', 'Docker', 'MongoDB', 'Firebase'
  'Data Structures'
]

skills.pop() // Sshhh

// These are the main things happening to my life
const myJourney = [
  { year: 2017, milestone: 'Started game development with C# (Unity 2D) and C++' },
  { year: 2018, milestone: 'Focused on DSA and hardware technologies' },
  { year: 2020, milestone: 'Enrolled in IT institute, studied Java and C' }, // Good old days :(
  { year: 2022, milestone: 'Moved to Alligator City (aka Florida) Learned React, Tailwind, and Docker for deployment' }
]

const profiles: Map<string, string> = {
  'github': 'FrancescoMaca',
  'instagram': '@franky_maca',
  'linkedin': 'francesco_macaluso'
}


//
// Wanna see more?
// Click [[ACTION:seeMore]]
//
console.log(\`Last updated: \${new Date().toISOString().split('T')[0]}\`) // ${new Date().toISOString().split('T')[0]}

console.log('Made with 💛 by Francesco Macaluso!')

























// The page.tsx is finished here









































// I swear it's finished





























// EOF Overflow, Dumping memory....
${generateSimulatedMemoryDump(40)}



// OKAY OKAY I GET IT. The fake memory dump was probably a big waste of time on my part.
// But I guess those are just 60 lines of many that I wrote.
// Since you wanna be all fancy and discover my secrets I have a proposal for you.


// I want to personally invite you... (**suspense music**)
//                                (no I am not gonna go through the trouble to actually put music on-scroll here)
// to check out my EXTREMELY secret projects that are up and 🏃.

// Click the button below to run some VERY SAFE commands in the console
console.do(
  () => [[ACTION:runCommand]]
)




`};

function generateSimulatedMemoryDump(rows = 40, bytesPerRow = 16) {
  const words = ['Dark', 'Procastination', 'SckOvr', 'Delusion', 'Sadness', 'Why u here?'];
  const symbols = '!@#$%^&*()_+-=[]{}|;?';
  function getRandomChar() {
    const charType = Math.random();

    if (charType < 0.3) return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Lowercase letter
    if (charType < 0.5) return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Uppercase letter
    if (charType < 0.6) return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // Number
    if (charType < 0.85) return ' '; // Space
    if (charType < 0.9) return '.'; // Period
    return symbols[Math.floor(Math.random() * symbols.length)]; // Symbol
  }

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  let result = '         ';
  for (let i = 0; i < bytesPerRow; i++) {
    result += ` 0x${i.toString(16).padStart(2, '0').toUpperCase()}`;
  }
  result += ' | ASCII\n';
  result += '---------' + '-'.repeat(bytesPerRow * 5) + '-+' + '-'.repeat(bytesPerRow) + '\n';

  for (let row = 0; row < rows; row++) {
    const offset = row * bytesPerRow;
    let line = `0x${offset.toString(16).padStart(6, '0')} `;
    let hexPart = '';
    let asciiPart = '';

    let wordInserted = false;
    for (let col = 0; col < bytesPerRow; col++) {
      let char;
      if (!wordInserted && Math.random() < 0.1) {
        const word = getRandomWord();
        for (let i = 0; i < word.length && col < bytesPerRow; i++, col++) {
          char = word[i];
          hexPart += `  ${char.charCodeAt(0).toString(16).padStart(3, '0').toUpperCase()}`;
          asciiPart += char;
        }
        col--; // Adjust for the loop increment
        wordInserted = true;
      } else {
        char = getRandomChar();
        hexPart += `  ${char.charCodeAt(0).toString(16).padStart(3, '0').toUpperCase()}`;
        asciiPart += char;
      }
    }

    result += line + hexPart + ' | ' + asciiPart + '\n';
  }

  return result;
}
