import React, { useEffect, useRef, useState } from 'react';
import { consoleCommands } from '../commands';
import { useSelector } from 'react-redux';
import { RootState } from '@/components/redux';
import { clearPendingCommand } from '@/components/redux/slices/console-commands-slice';
import { useDispatch } from 'react-redux';

type CommandStatus = 'none' | 'success' | 'error';

type CommandOutput = {
  type: 'input' | 'output';
  content: string;
  status: CommandStatus;
};

export default function ConsoleContent() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [_, setHistoryIndex] = useState(-1)
  const [output, setOutput] = useState<CommandOutput[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)
  const pendingCommand = useSelector((state: RootState) => state.consoleCommands.pendingCommand)
  const pendingCommandRef = useRef<string | null>(null)
  const dispatch = useDispatch()

  const prompt = '○ francescomacaluso@Frankys-MacBook-Pro portfolio % '

  const getPrompt = (status: CommandStatus) => {
    const circle = status === 'success' ? '●' : '○'
    const color = status === 'success' ? 'text-sky-500' : status === 'error' ? 'text-red-500' : 'text-white'
    return (
      <span>
        <span className={color}>{circle}</span>
        <span> francescomacaluso@Frankys-MacBook-Pro portfolio % </span>
      </span>
    );
  };

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }

    if (pendingCommand) {
      pendingCommandRef.current = pendingCommand;
      setInput(pendingCommand);
      dispatch(clearPendingCommand());
    }
  }, [output, pendingCommand, dispatch])

  useEffect(() => {
    if (pendingCommandRef.current) {
      handleSubmit();
      pendingCommandRef.current = null;
    }
  }, [input])

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
        
    if (!input.trim()) {
      setOutput(prev => [...prev, { type: 'output', content: prompt, status: 'none' }])
      setInput('')
      return
    }

    setOutput(prev => [...prev, { type: 'input', content: input, status: 'none' }]);
    setHistory(prev => [input, ...prev]);
    setHistoryIndex(-1);

    const [command, ...args] = input.trim().split(' ');
    const result = executeCommand(command, args);

    if (result === 'CLEAR_CONSOLE') {
      setOutput([]);
    } else {
      const status: CommandStatus = result.startsWith('zsh: command not found:') ? 'error' : 'success';
      setOutput(prev => [...prev, { type: 'output', content: result, status: status }]);
    }

    setInput('');
  };

  const executeCommand = (command: string, args: string[]): string => {
    const cmd = consoleCommands[command as keyof typeof consoleCommands];
    if (cmd) {
      return cmd.action(args);
    }
    return `zsh: command not found: ${command}`;
  };

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
  };

  return (
    <div className="h-full text-white p-4 rounded-md flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
      ref={consoleRef}
    >
      <div>
        {
          output.map((item, index) => (
            <div key={index} className="break-words whitespace-pre-wrap text-sm">
              {item.type === 'input' ? getPrompt(output[index + 1]?.status || 'none') : ''}
              <span>{item.content}</span>
            </div>
            )
          )
        }
      </div>
      <form onSubmit={handleSubmit} className="flex items-center text-sm">
        <span className="flex-shrink-0 mr-2">{getPrompt('none')}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow text-sm bg-dark p-0 outline-none border-0"
          autoFocus
        />
      </form>
      </div>
  );
}
