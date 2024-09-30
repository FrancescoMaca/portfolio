

export const specificCmd = {
  clear: 'CLEAR',
  checkDiskSize: 'hwmemsize=$(sysctl -n hw.memsize)',
  killDuck: 'pkill -KILL duck.exe',
  getWebsiteDirs: `curl -s https://frankymaca.me | grep -o '"[^"]*/"' | sort -u`,
}

export enum CLICommandResult {
  SUCCESS,
  ERROR,
  NONE
}

export enum CLICommandType {
  INPUT,
  OUTPUT
}

export interface CLICommandResultDetails {
  message: string;
  status: CLICommandResult;
}

export interface CLICommand {
  description: string;
  usage: string;
  action: (args?: string[]) => CLICommandResultDetails;
}

export interface CLICommandOutput {
  type: CLICommandType;
  content: string;
  status: CLICommandResult;
}