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
  'md': 'markdown',
  'yml': 'yaml'
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
  'md': 'markdown',
  'yml': 'yaml',
}

const specialIconMap = {
  'next.config.js': 'next',
  '.eslintrc.json': 'eslint',
  '.gitignore': 'git',
  '.env': 'ini',
  '.env.sample': 'shell',
  'next-env.d.ts': 'typescriptdef',
  'package.json': 'npm',
  'tailwind.config.ts': 'tailwind',
  'tsconfig.json': 'tsconfig',
  'yarn.lock': 'yarn',
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

export function formatDate(date: Date): string {  
  const day = date.getDate().toString().padStart(2, '0');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()].substring(0, 3);
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}


export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return 'just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  } else if (diffInMonths <= 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  } else {
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  }
}