

export const specificCmd = {
  checkDiskSize: 'hwmemsize=$(sysctl -n hw.memsize)',
  killDuck: 'pkill -KILL duck.exe',
  getWebsiteDirs: `curl -s https://frankymaca.me | grep -o '"[^"]*/"' | sort -u`,
}

export function isSpecificCommand(cmd: string) {
  return Object.values(specificCmd).includes(cmd)
}