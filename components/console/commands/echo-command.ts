

export const echoCommand = {
  description: 'Echo a passed string.',
  usage: 'echo <string>',
  action: (args: string[]) => args.join(' ')
}