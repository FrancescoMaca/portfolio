import { formatCLIDate } from "@/components/utils/helpers";

interface CLISpecificCommand {
  command: string;
  output: string;
}

export const specificCmd: CLISpecificCommand[] = [
  {
    command: 'hwmemsize=$(sysctl -n hw.memsize)',
    output: "PhysMem: 17G used (3955M wired, 6841M compressor), 212M unused."
  },
  {
    command: `curl -s https://frankymaca.me | grep -o '"[^"]*/"' | sort -u`,
    output: `--${formatCLIDate()}--  https://frankymaca.me/
Resolving frankymaca.me (frankymaca.me)... 127.0.0.1
Checking https://frankymaca.me/ ...  OK
Checking https://frankymaca.me/[Future Project Dedicated Pages]/ ...  Not Found
`
  }
]

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
  action: (args?: string[]) => Promise<CLICommandResultDetails>;
}

export interface CLICommandOutput {
  type: CLICommandType;
  content: string;
  status: CLICommandResult;
}