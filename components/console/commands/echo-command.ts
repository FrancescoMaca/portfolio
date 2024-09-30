import { CLICommand, CLICommandResult } from "./command-handler";


export const echoCommand: CLICommand = {
  description: 'Echo a passed string.',
  usage: 'echo <string>',
  action: (args: string[]) => {
    return {
      message: args.join(' '),
      status: CLICommandResult.SUCCESS
    }
  }
}