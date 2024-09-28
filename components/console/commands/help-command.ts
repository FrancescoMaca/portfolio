import { consoleCommands } from ".";


export const helpCommand = {
  description: 'List all available commands.',
  usage: 'help',
  action: () => Object.entries(consoleCommands).map(([name, cmd]) => `${name}: ${cmd.description}`).join('\n')
}