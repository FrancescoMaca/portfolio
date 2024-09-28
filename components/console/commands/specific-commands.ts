'use client'

export const killDuckCommand = {
  description: 'Kills a process.',
  usage: 'pkill -<HUP|KILL|TERM> <process_name>',
  action: (args: string[]) => {
    if (args.length < 1) {
      return 'usage: pkill -<HUP|KILL|TERM> <process_name>'
    }

    const sig = args[0].substring(1)
    if (!['HUP','KILL','TERM'].includes(sig)) {
      return 'Signal ' + sig + ' not recognized'
    }

    if (args[1] === 'duck.exe') {
      return 'Process duck.exe terminated'
    }
    else if (args[1] === 'me') {
      return 'Come on, you knew this would\'ve happened. Don\'t do that plz'
    }
    else {
      return 'You cannot kill ' + args[1]
    }
  }
}