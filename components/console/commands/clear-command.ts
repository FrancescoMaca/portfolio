import { CLICommand, CLICommandResult } from "./command-handler";

export const clearCommand: CLICommand = {
  description: 'Clears the console.',
  usage: 'clear',
  action: () => { return { message: 'CLEAR', status: CLICommandResult.SUCCESS} }
}
