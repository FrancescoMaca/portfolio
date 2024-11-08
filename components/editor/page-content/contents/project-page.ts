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
    - FCFS / First-Come-First-Served            \$\{ /* [[URL:FCFS,https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)]] */ \}
    - SJF / Shortest-Job-First                  \$\{ /* [[URL:SJF,https://en.wikipedia.org/wiki/Shortest_job_next]] */ \}
    - SRTF / Shortest-Remaining-Time-First      \$\{ /* [[URL:SRTF,https://en.wikipedia.org/wiki/Shortest_remaining_time]] */ \}
    - Round Robin                               \$\{ /* [[URL:RR,https://en.wikipedia.org/wiki/Round-robin_scheduling]] */ \}
    - Priority                                  \$\{ /* [[URL:Priority,https://en.wikipedia.org/wiki/Scheduling_(computing)]] */ \}

    I am pretty proud of this as my second project.
  \`,
  rating: Rating.ADEQUATE.
  url: \`[[URL:See CPU_Scheduler on GitHub,https://github.com/FrancescoMaca/CPU-Scheduling]]\`
}

const Quickbot = {
  name: 'Quickbot'
  date: new Date() // Ongoing
  description: \`
    This application is built on Google’s Blockly library, enabling users to create their
    own Discord bots without writing any code. With an intuitive drag-and-drop interface,
    users can easily design bots by selecting from a wide range of actions, such as sending
    messages, kicking or banning users, and much more. It's a simple, code-free way to bring
    your custom Discord bot to life!
  \`,
  rating: Rating.PHENOMENAL.
  url: undefined, // This is a private repository :/
}

const ReadMeet = {
  name: 'ReadMeet'
  date: new Date() // Ongoing
  description: \`
    I have been collaborating with an Italian freelancer on a mobile application designed for
    book lovers to connect with others who share their passion for reading. The app places a
    strong emphasis on books and literary interests, rather than appearance. We are also partnering
    with Mondadori, one of Italy's largest and most respected book publishers.
  \`,
  rating: Rating.PHENOMENAL.
  url: undefined, // This is also a private repository :/
}

document.this = {
  name: 'Francesco VS Code'
  date: new Date(2024, 11) // Nov 2024
  description: \`
    This is my 3rd version of the portfolio. I change ideas a lot, but while I work on
    websites and projects I keep changing ideas, and I also become better and better,
    making me re-think of the whole project. But I think this is going to be the last
    version for a big while!
  \`,
  rating: Rating.EXCEPTIONAL.
  url: \`[[URL:See CPU_Scheduler on GitHub,https://github.com/FrancescoMaca/portfolio]]\`
}

`};