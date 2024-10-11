export const fileStructure = [
  {
    name: ['.docker', 'deployment', 'react', 'frontend'],
    icon: 'docker',
    isFolder: true,
    children: [
      { name: 'Dockerfile', icon: 'docker', isLink: true }
    ]
  },
  {
    name: ['.github', 'workflows'],
    icon: 'github',
    isFolder: true,
    children: [
      { name: 'deploy.yml', icon: 'yaml' }
    ]
  },
  {
    name: 'app',
    icon: 'app',
    isFolder: true,
    isOpenByDefault: true,
    isLink: true, // This is just an exception for the app/ directory
    children: [
      { name: 'globals.css', icon: 'css' },
      { name: 'layout.tsx', icon: 'reactts' },
      { name: 'page.tsx', icon: 'reactts', isLink: true },
      { name: 'project-page.tsx', icon: 'reactts', isLink: true },
      { name: 'company-page.tsx', icon: 'reactts', isLink: true },
      { name: 'contact-page.tsx', icon: 'reactts', isLink: true }
    ]
  },
  {
    name: 'components',
    icon: 'component',
    isFolder: true,
    children: [
      { name: 'editor', icon: 'default', isFolder: true, children: [] },
      {
        name: 'navbar',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'redux',
        icon: 'light_redux',
        isFolder: true,
        children: [
          { name: 'index.ts', icon: 'typescript' },
          { name: 'redux-provider.tsx', icon: 'reactts' },
          {
            name: 'slices',
            icon: 'light_redux',
            isFolder: true,
            children: [
              { name: 'tab-slice.ts', icon: 'typescript' }
            ]
          }
        ]
      },
      {
        name: 'tabs',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'extensions.tsx', icon: 'reactts' },
          {
            name: 'file-explorer',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'file-explorer-item.tsx', icon: 'reactts' },
              { name: 'file.tsx', icon: 'reactts' }
            ]
          },
          { name: 'file-explorer.tsx', icon: 'reactts' },
          { name: 'index.tsx', icon: 'reactts' },
          { name: 'run-and-debug.tsx', icon: 'reactts' },
          { name: 'source-control.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'toolbox',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' },
          { name: 'toolbox-item.tsx', icon: 'reactts' }
        ]
      }
    ]
  },
  {
    name: 'node_modules',
    icon: 'node',
    isFolder: true,
    children: [
      { name: 'Disk quota exceeded [errno 122]', icon: 'error' }
    ]
  },
  {
    name: 'public',
    icon: 'public',
    isFolder: true,
    children: [
      {
        name: 'documents',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'Francesco Macaluso - Resume.pdf', icon: 'pdf' }
        ]
      },
      {
        name: 'favicon',
        icon: 'favicon',
        isFolder: true,
        children: [
          { name: 'favicon-128.png', icon: 'image' },
          { name: 'favicon-192.png', icon: 'image' },
          { name: 'favicon-196.png', icon: 'image' },
          { name: 'favicon-256.png', icon: 'image' },
          { name: 'favicon-32.png', icon: 'image' },
          { name: 'favicon-512.png', icon: 'image' },
          { name: 'favicon-64.png', icon: 'image' }
        ]
      },
      {
        name: 'font',
        icon: 'fonts',
        isFolder: true,
        children: [
          { name: 'menlo-regular.ttf', icon: 'font' }
        ]
      },
      { name: 'manifest.json', icon: 'manifest' },
      {
        name: 'pictures',
        icon: 'images',
        isFolder: true,
        children: [
          { name: 'francesco-macaluso.png', icon: 'image', isLink: true }
        ]
      },
      { name: 'robots.txt', icon: 'robots' },
      { name: 'svg', icon: 'default', isFolder: true, children: [] }
    ]
  },
  {
    name: 'server',
    icon: 'default',
    isFolder: true,
    children: [
      { name: 'email.ts', icon: 'typescript' }
    ]
  },
  { name: '.dockerignore', icon: 'docker', isLink: true },
  { name: '.env', icon: 'ini', isLink: true },
  { name: '.env.sample', icon: 'shell', isLink: true  },
  { name: '.eslintrc.json', icon: 'eslint', isLink: true  },
  { name: '.gitignore', icon: 'git', isLink: true  },
  { name: 'next-env.d.ts', icon: 'typescriptdef', isLink: true  },
  { name: 'next.config.js', icon: 'next', isLink: true  },
  { name: 'package.json', icon: 'npm', isLink: true  },
  { name: 'postcss.config.js', icon: 'postcssconfig', isLink: true  },
  { name: 'README.md', icon: 'markdown', isLink: true  },
  { name: 'tailwind.config.ts', icon: 'tailwind', isLink: true  },
  { name: 'tsconfig.json', icon: 'tsconfig', isLink: true  },
  { name: 'yarn.lock', icon: 'yarn', isLink: true  },
];

// AI generated
export function getFilePath(fileName: string): string[] {
  function searchFile(structure: any[], currentPath: string[] = []): string[] | null {
    for (const item of structure) {
      let newPath = [...currentPath];
      
      if (Array.isArray(item.name)) {
        newPath = [...newPath, ...item.name];
      } else if (typeof item.name === 'string') {
        newPath = [...newPath, item.name];
      }

      if (item.name === fileName || (typeof item.name === 'string' && item.name.toLowerCase() === fileName.toLowerCase())) {
        return newPath.slice(0, -1); // Return path without the file name
      }

      if (item.children) {
        const result = searchFile(item.children, newPath);
        if (result) return result;
      }
    }
    return null;
  }

  const result = searchFile(fileStructure);
  return result || [];
}