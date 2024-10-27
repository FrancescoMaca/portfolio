'use client'

import { CLICommand, CLICommandResult } from "./command-handler"
import { killProcess, runningProcesses } from "./ps-command"

export const killDuckCommand: CLICommand = {
  description: 'Kills a process.',
  usage: 'pkill -<HUP|KILL|TERM> <process_name>',
  action: async (args?: string[]) => {

    if (!args || args.length < 1) {
      return {
        message: 'usage: pkill -<HUP|KILL|TERM> <process_name>',
        status: CLICommandResult.ERROR
      }
    }

    if (!args[0].startsWith('-')) {
      return {
        message: `Signal ${args[0]} not recognized\nusage: pkill -<HUP|KILL|TERM> <process_name>`,
        status: CLICommandResult.ERROR
      }
    }

    const sig = args[0].substring(1)
    if (!['HUP','KILL','TERM'].includes(sig)) {
      return {
        message: `Signal ${sig} not recognized\nusage: pkill -<HUP|KILL|TERM> <process_name>`,
        status: CLICommandResult.ERROR
      }
    }

    if (runningProcesses.find(proc => proc.name === args[1])) {
      killProcess(args[1])
      
      return {
        message: `Process ${args[1]} was stopped successfully`,
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
        message: 'Process ' + args[1] + ' not running. Try running \'ps\' to see running processes',
        status: CLICommandResult.ERROR
      }
    }
  }
}