import { clearCommand } from "./clear-console";
import { echoCommand } from "./echo-command";
import { helpCommand } from "./help-command";

export const consoleCommands = {
  help: helpCommand,
  echo: echoCommand,
  clear: clearCommand,
}