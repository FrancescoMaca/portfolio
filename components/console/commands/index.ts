import { clearCommand } from "./clear-command";
import { CLICommand } from "./command-handler";
import { echoCommand } from "./echo-command";
import { helpCommand } from "./help-command";
import { psCommand } from "./ps-command";
import { killDuckCommand } from "./specific-commands";

export const consoleCommands: { [key: string]: CLICommand } = {
  'help': helpCommand,
  'echo': echoCommand,
  'clear': clearCommand,
  'pkill': killDuckCommand,
  'ps': psCommand
}