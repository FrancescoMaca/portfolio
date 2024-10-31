import { PageContent } from "../content-handler";

export const projectPage: PageContent = {
  content: `
// Welcome to my project showcase! 
// Let's take a journey through my coding adventures...

enum Rating {
  WHO_WROTE_THIS,
  COULD_BE_BETTER,
  ADEQUATE,
  EXCEPTIONAL,
  PHENOMENAL
}

interface Project {
  name: string;
  date: Date;
  description: string;
  rating: Rating;
  url: string;
}

const Crypto = {
  name: 'Crypto'
  date: new Date(2017, 08) // August 2018
  description: \`
    This was my first actual project made in C# and Winform back in 2017. The app
    would encode and decode files based on a given password. There is a 'folder'
    option that allows you to encode entire folders.
  \`,
  rating: Rating.WHO_WROTE_THIS,
  url: \`[[URL:See Crypto on GitHub,https://github.com/FrancescoMaca/Crypto]]\`
}

const CPU_Scheduler = {
  name: 'CPU Scheduler'
  date: new Date(2019, 05) // May 2019
  description: \`
    This was a project done to learn how CPU scheduler algorithms work. There are a
    few implemented algorithms to schedule tasks, as well as taking context-switch and
    user-kernel mode switch times in consideration.
    There are five supported algorithms:
    - FCFS / First-Come-First-Served
    - SJF / Shortest-Job-First
    - SRTF / Shortest-Remaining-Time-First
    - Round Robin
    - Priority
    I am pretty proud of this as my second project.
  \`,
  rating: Rating.ADEQUATE.
  url: \`[[URL:See CPU_Scheduler on GitHub,https://github.com/FrancescoMaca/CPU-Scheduling]]\`
}
  
`};