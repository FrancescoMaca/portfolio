const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';

export function generateUUID(): string {
  return 'xxxxx'.replace(/[x]/g, (_) => {
    return charset[Math.floor(Math.random() * 100) % charset.length]
  });
}


const extensionLanguageMap = {
  'tsx': 'typescript',
  'ts': 'typescript',
  'dockerfile': 'dockerfile',
  'json': 'json',
  'js': 'javascript',
  'gitignore': 'ini',
  'env': 'ini',
  'sample': 'ini',
  'lock': 'ini',
}

export function getPageLanguage(filename: string): string {
  const ext = filename.split('.').pop().toLowerCase()
  
  return extensionLanguageMap[ext] ?? 'plaintext'
}

const extensionIconMap = {
  'tsx': 'reactts',
  'dockerfile': 'docker',
  'js': 'js',
  'dockerignore': 'docker',
}

const specialIconMap = {
  'next.config.js': 'next'
}

export function extToIcon(filename: string): string {

  if (specialIconMap[filename]) {
    return specialIconMap[filename]
  }

  const ext = filename.split('.').pop().toLowerCase()
  
  return extensionIconMap[ext] ?? 'text'
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
