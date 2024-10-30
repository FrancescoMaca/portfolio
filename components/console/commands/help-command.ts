import { consoleCommands } from ".";
import { CLICommand, CLICommandResult } from "./command-handler";

export const helpCommand: CLICommand = {
  description: 'List all available commands.',
  usage: 'help',
  action: async (_) => {
    return {
      message: `
${Object.entries(consoleCommands).map(([name, cmd]) => `${name}: ${cmd.description}`).join('\n')}      

`,
      status: CLICommandResult.SUCCESS
    }
  }
}