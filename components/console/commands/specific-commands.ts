'use client'

import { CLICommand, CLICommandResult } from "./command-handler"

export const killDuckCommand: CLICommand = {
  description: 'Kills a process.',
  usage: 'pkill -<HUP|KILL|TERM> <process_name>',
  action: (args: string[]) => {
    if (args.length < 1) {
      return {
        message: 'usage: pkill -<HUP|KILL|TERM> <process_name>',
        status: CLICommandResult.ERROR
      }
    }

    const sig = args[0].substring(1)
    if (!['HUP','KILL','TERM'].includes(sig)) {
      return {
        message: `Signal ${sig} not recognized`,
        status: CLICommandResult.ERROR
      }
    }

    if (args[1] === 'duck.exe') {
      return {
        message: 'Process duck.exe terminated',
        status: CLICommandResult.SUCCESS
      }
    }
    else if (args[1] === 'me') {
      return {
        message: 'Come on, you knew this would\'ve happened. Don\'t do that plz',
        status: CLICommandResult.SUCCESS
      }
    }
    else {
      return {
        message: 'You cannot kill ' + args[1],
        status: CLICommandResult.ERROR
      }
    }
  }
}