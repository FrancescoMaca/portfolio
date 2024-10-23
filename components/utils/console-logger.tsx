'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLog } from '../redux/slices/console-slice';
import { RootState } from '../redux';

// Define types
interface Log {
  type: string;
  content: string;
  timestamp: string;
}

export function ConsoleLogger() {
  const dispatch = useDispatch();
  const logs = useSelector((state: RootState) => state.console.logs);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    const addLogEntry = (type: string, args: any[]) => {
      const logEntry: Log = {
        type,
        content: args.map((arg: any) => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '),
        timestamp: formatDate(new Date().toISOString())
      };
      dispatch(addLog(logEntry));
    };

    console.log = (...args: any) => {
      originalLog.apply(console, args);
      addLogEntry('log', args);
    };

    console.warn = (...args: any) => {
      originalWarn.apply(console, args);
      addLogEntry('warning', args);
    };

    console.error = (...args: any) => {
      originalError.apply(console, args);
      addLogEntry('error', args);
    };

    window.onerror = (message, source, line, column, error) => {
      addLogEntry('error', [`${message} (${source}:${line}:${column})`]);
    };

    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      window.onerror = null;
    };
  }, [dispatch]);

  return (
    <div className='flex flex-col h-full p-4 overflow-y-auto'>
      {logs.map((log: Log, i: number) => (
        <div key={i} style={{ 
          color: log.type === 'error' ? 'red' : log.type === 'warning' ? 'orange' : 'white' 
        }}>
          [{log.timestamp}] {log.type}: {log.content}
        </div>
      ))}
      {
        logs.length === 0 &&
        <div className='text-white'>
          There are no messages to be displayed. Break something to see a message here! :/
        </div>
      }
    </div>
  );
}