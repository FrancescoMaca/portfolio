export function generateUUID(): string {
  return 'xxxxx'.replace(/[x]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function getPageLanguage(filename: string): string {
  const ext = filename.split('.').pop().toLowerCase()

  switch(ext) {
    case 'tsx':
      return 'typescript'
    case 'dockerfile':
      return 'dockerfile'
    default:
      return 'plaintext'
  }
}

export function extToIcon(filename: string): string {

  const ext = filename.split('.').pop().toLowerCase()
  
  switch(ext) {
    case 'tsx':
      return 'reactts'
    case 'dockerfile':
      return 'docker'
    default:
      return 'text'
  }
}

export function formatCLIDate(): string {
  const date = new Date()
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `--${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
