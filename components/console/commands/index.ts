import { clearCommand } from "./clear-command";
import { echoCommand } from "./echo-command";
import { helpCommand } from "./help-command";
import { killDuckCommand } from "./specific-commands";

export const consoleCommands = {
  help: helpCommand,
  echo: echoCommand,
  clear: clearCommand,
  pkill: killDuckCommand
}