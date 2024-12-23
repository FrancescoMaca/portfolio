import { CLICommand, CLICommandResult, CLICommandResultDetails } from "./command-handler";

interface PInfo {
  name: string;
  description: string;
}

export let runningProcesses: PInfo[] = [
  { name: 'duck.exe', description: 'Very interesting background duck process' },
  { name: 'vscode.exe', description: 'Basically the kernel of all this' },
  { name: 'franky.exe', description: 'The root user process'}
]

export function killProcess(pName: string) {
  runningProcesses = runningProcesses.filter(p => p.name !== pName)
}

export const psCommand: CLICommand = {
  description: "Shows all the running processes",
  usage: "ps",
  action: async (_) => {
    return {
      status: CLICommandResult.SUCCESS,
      message: runningProcesses.map(proc => `${proc.name} - ${proc.description}`).join('\n')
    }
  }
}