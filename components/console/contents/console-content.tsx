import React, { useCallback, useEffect, useRef, useState } from 'react';
import { consoleCommands } from '../commands';
import { useSelector } from 'react-redux';
import { RootState } from '@/components/redux';
import { clearPendingCommand } from '@/components/redux/slices/console-commands-slice';
import { useDispatch } from 'react-redux';
import { CLICommand, CLICommandOutput, CLICommandResult, CLICommandResultDetails, CLICommandType, specificCmd } from '../commands/command-handler';
import { useWindowWidth } from '@react-hook/window-size';

export default function ConsoleContent() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [_, setHistoryIndex] = useState(-1)
  const [output, setOutput] = useState<CLICommandOutput[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)
  const pendingCommand = useSelector((state: RootState) => state.consoleCommands.pendingCommand)
  const pendingCommandRef = useRef<string | null>(null)
  const dispatch = useDispatch()
  const width = useWindowWidth()
  
  const prompt = `○ ${ width > 768 ? 'francescomacaluso' : 'franky'}@${ width > 768 ? 'Frankys-MacBook-Pro' : 'iPhone'} portfolio % `

  useEffect(() => {
    if (pendingCommand) {
      pendingCommandRef.current = pendingCommand;
      setInput(pendingCommand);
      dispatch(clearPendingCommand());
    }

    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }
  }, [output, pendingCommand, dispatch])

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim()) {
      setOutput(prev => [...prev, { type: CLICommandType.OUTPUT, content: prompt, status: CLICommandResult.NONE }])
      setInput('')
      return
    }
    
    const commandResult: CLICommandOutput = await handleCommand(input)
    if (commandResult.content === 'CLEAR') {
      setOutput([])
      setInput('');
    }
    else {
      setOutput(prev => [...prev, { type: CLICommandType.INPUT, content: input, status: CLICommandResult.NONE }]);
      setOutput(prev => [...prev, commandResult])
      setHistory(prev => [input, ...prev]);
      setHistoryIndex(-1);
      setInput('');
    }
  }, [input, prompt])

  useEffect(() => {
    if (pendingCommandRef.current) {
      handleSubmit();
      pendingCommandRef.current = null;
      inputRef.current?.focus()
    }
  }, [input, handleSubmit])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();

      setHistoryIndex(prev => {
        const newIndex = Math.min(prev + 1, history.length - 1);
        setInput(history[newIndex] || '');
        return newIndex;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();

      setHistoryIndex(prev => {
        const newIndex = Math.max(prev - 1, -1);
        setInput(newIndex === -1 ? '' : history[newIndex]);
        return newIndex;
      });
    }
  }

  return (
    <div className="h-full overflow-y-auto text-white p-4 flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
      ref={consoleRef}
    >
      {
        output.map((item, index) => (
          <div key={index} className="break-words whitespace-pre-wrap text-xs md:text-sm">
            {item.type === CLICommandType.INPUT ? getPrompt(output[index + 1].status, prompt) : ''}
            <span>{item.content}</span>
          </div>
          )
        )
      }
      <form onSubmit={handleSubmit} className="flex items-center text-xs md:text-sm">
        <span className="flex-shrink-0 mr-2">{getPrompt(CLICommandResult.NONE, prompt)}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow text-xs md:text-sm bg-dark p-0 outline-none border-0"
          autoFocus
        />
      </form>
      </div>
  );
}

const getPrompt = (status: CLICommandResult, adaptivePrompt: string) => {
  const circle = status !== CLICommandResult.NONE ? '●' : '○'
  let color = 'text-white'
  
  if (status === CLICommandResult.SUCCESS) {
    color = 'text-sky-500'
  }
  else if (status === CLICommandResult.ERROR) {
    color = 'text-red-500'
  }

  return (
    <span>
      <span className={`${color} select-disable`}>{circle}</span>
      <span> {adaptivePrompt.substring(2, adaptivePrompt.length - 1)} </span>
    </span>
  );
};

async function handleCommand(cmd: string): Promise<CLICommandOutput> {
  const cmdObject = specificCmd.find(command => command.command === cmd)
  
  if (cmdObject) {
    return { type: CLICommandType.OUTPUT, content: cmdObject.output, status: CLICommandResult.SUCCESS }
  }

  const [commandName, ...argsNames] = cmd.trim().split(' ')
  const command: CLICommand | undefined = consoleCommands[commandName]

  let res: CLICommandOutput = {
    type: CLICommandType.OUTPUT,
    content: `zsh: command not found: ${commandName}`,
    status: CLICommandResult.ERROR
  }
  
  if (command) {
    const { message, status }: CLICommandResultDetails = await command.action(argsNames)
    
    if (message === 'CLEAR') {
      return { ...res, content: 'CLEAR' }
    }

    res = { ...res, content: message, status: status }
  }
  
  return { type: CLICommandType.OUTPUT, content: res.content, status: res.status }
}