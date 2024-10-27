import { CLICommand, CLICommandResult } from "./command-handler";


export const echoCommand: CLICommand = {
  description: 'Echo a passed string.',
  usage: 'echo <string>',
  action: async (args?: string[]) => {
    if (!args || args.length === 0) {
      return {
        message: '',
        status: CLICommandResult.SUCCESS
      }
    }

    return {
      message: args.join(' '),
      status: CLICommandResult.SUCCESS
    }
  }
}