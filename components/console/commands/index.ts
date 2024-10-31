import { clearCommand } from "./clear-command";
import { CLICommand } from "./command-handler";
import { echoCommand } from "./echo-command";
import { gitCommand } from "./git-command";
import { helpCommand } from "./help-command";
import { psCommand } from "./ps-command";
import { pkillCommand } from "./pkill-commands";

export const consoleCommands: { [key: string]: CLICommand } = {
  'help': helpCommand,
  'echo': echoCommand,
  'clear': clearCommand,
  'pkill': pkillCommand,
  'ps': psCommand,
  'git': gitCommand
}