import { sendEmail } from "@/components/utils/emailer";
import { CLICommand, CLICommandResult } from "./command-handler";

interface CommitMessage {
  title: string;
  sender: string;
  description?: string;
}

const errorMessage = {
  message: `usage: git commit -m "[sender]" -m "[title]" -m "[message]"
[sender] - Your email address
[title] - The title of the email
[message] - Whatever you wanna say to me, it can be empty too\n
`,
  status: CLICommandResult.ERROR
};

export const gitCommand: CLICommand = {
  description: 'Simulates git commit command with title, optional message, and sender',
  usage: 'git commit -m "[title]" -m "[message]" -m "[sender]"',
  action: async (args?: string[]) => {
    if (!args || args.length < 3) {
      return errorMessage
    }

    try {      
      const { sender, title, description } = parseCommitMessage(args);
      
      if (!title || !sender) {
        return errorMessage
      }

      try {
        await sendEmail(title, sender, description);

        let output = `[main ${generateCommitHash()}] ${title}\n`;
        output += `From: ${sender}\n`;
        if (description) {
          output += `\n${description}\n`;
        }
        output += `\n1 commit sent successfully`;

        return {
          message: output,
          status: CLICommandResult.SUCCESS
        }

      } catch (error) {
        return {
          message: `Failed to send commit: ${error instanceof Error ? error.message : 'Unknown error'}`,
          status: CLICommandResult.ERROR
        };
      }
    } catch (error) {
      return {
        message: error instanceof Error ? error.message : 'Invalid commit format',
        status: CLICommandResult.ERROR
      };
    }
  }
};

function parseCommitMessage(args: string[]): CommitMessage {
  const message: CommitMessage = {
    title: '',
    description: undefined,
    sender: ''
  };

  const messages: string[] = [];
  let currentIndex = 0;

  while (currentIndex < args.length) {
    if (args[currentIndex] === '-m' && currentIndex + 1 < args.length) {
      let msg = '';
      currentIndex++;
      while (currentIndex < args.length && args[currentIndex] !== '-m') {
        msg += (msg ? ' ' : '') + args[currentIndex].replace(/^["'](.*)["']$/, '$1');
        currentIndex++;
      }
      messages.push(msg);
    } else {
      currentIndex++;
    }
  }

  if (messages.length >= 1) message.sender = messages[0];    // Third -m is sender
  if (messages.length >= 2) message.title = messages[1];    // First -m is title
  if (messages.length >= 3) message.description = messages[2];  // Second -m is description

  return message;
}

function generateCommitHash(): string {
  const chars = '0123456789abcdef';
  let hash = '';
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}