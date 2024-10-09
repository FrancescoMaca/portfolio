export const fileStructure = [
  {
    name: ['.docker', 'deployment', 'react', 'frontend'],
    icon: 'type_docker',
    isFolder: true,
    children: [
      { name: 'Dockerfile', icon: 'type_docker', isLink: true }
    ]
  },
  {
    name: ['.github', 'workflows'],
    icon: 'type_github',
    isFolder: true,
    children: [
      { name: 'deploy.yml', icon: 'type_yaml' }
    ]
  },
  {
    name: 'app',
    icon: 'type_app',
    isFolder: true,
    isOpenByDefault: true,
    isLink: true, // This is just an exception for the app/ directory
    children: [
      { name: 'globals.css', icon: 'type_css' },
      { name: 'layout.tsx', icon: 'type_reactts' },
      { name: 'page.tsx', icon: 'type_reactts', isLink: true },
      { name: 'project-page.tsx', icon: 'type_reactts', isLink: true },
      { name: 'company-page.tsx', icon: 'type_reactts', isLink: true },
      { name: 'contact-page.tsx', icon: 'type_reactts', isLink: true }
    ]
  },
  {
    name: 'components',
    icon: 'type_component',
    isFolder: true,
    children: [
      { name: 'editor', icon: 'default', isFolder: true, children: [] },
      {
        name: 'navbar',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'type_reactts' }
        ]
      },
      {
        name: 'redux',
        icon: 'type_light_redux',
        isFolder: true,
        children: [
          { name: 'index.ts', icon: 'type_typescript' },
          { name: 'redux-provider.tsx', icon: 'type_reactts' },
          {
            name: 'slices',
            icon: 'type_light_redux',
            isFolder: true,
            children: [
              { name: 'tab-slice.ts', icon: 'type_typescript' }
            ]
          }
        ]
      },
      {
        name: 'tabs',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'extensions.tsx', icon: 'type_reactts' },
          {
            name: 'file-explorer',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'file-explorer-item.tsx', icon: 'type_reactts' },
              { name: 'file.tsx', icon: 'type_reactts' }
            ]
          },
          { name: 'file-explorer.tsx', icon: 'type_reactts' },
          { name: 'index.tsx', icon: 'type_reactts' },
          { name: 'run-and-debug.tsx', icon: 'type_reactts' },
          { name: 'source-control.tsx', icon: 'type_reactts' }
        ]
      },
      {
        name: 'toolbox',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'type_reactts' },
          { name: 'toolbox-item.tsx', icon: 'type_reactts' }
        ]
      }
    ]
  },
  {
    name: 'node_modules',
    icon: 'type_node',
    isFolder: true,
    children: [
      { name: 'Disk quota exceeded [errno 122]', icon: 'type_error' }
    ]
  },
  {
    name: 'public',
    icon: 'type_public',
    isFolder: true,
    children: [
      {
        name: 'documents',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'Francesco Macaluso - Resume.pdf', icon: 'type_pdf' }
        ]
      },
      {
        name: 'favicon',
        icon: 'type_favicon',
        isFolder: true,
        children: [
          { name: 'favicon-128.png', icon: 'type_image' },
          { name: 'favicon-192.png', icon: 'type_image' },
          { name: 'favicon-196.png', icon: 'type_image' },
          { name: 'favicon-256.png', icon: 'type_image' },
          { name: 'favicon-32.png', icon: 'type_image' },
          { name: 'favicon-512.png', icon: 'type_image' },
          { name: 'favicon-64.png', icon: 'type_image' }
        ]
      },
      {
        name: 'font',
        icon: 'type_fonts',
        isFolder: true,
        children: [
          { name: 'menlo-regular.ttf', icon: 'type_font' }
        ]
      },
      { name: 'manifest.json', icon: 'type_manifest' },
      {
        name: 'pictures',
        icon: 'type_images',
        isFolder: true,
        children: [
          { name: 'francesco-macaluso.png', icon: 'type_image', isLink: true }
        ]
      },
      { name: 'robots.txt', icon: 'type_robots' },
      { name: 'svg', icon: 'default', isFolder: true, children: [] }
    ]
  },
  {
    name: 'server',
    icon: 'default',
    isFolder: true,
    children: [
      { name: 'email.ts', icon: 'type_typescript' }
    ]
  },
  { name: '.dockerignore', icon: 'type_docker' },
  { name: '.env', icon: 'type_ini' },
  { name: '.env.sample', icon: 'type_shell' },
  { name: '.eslintrc.json', icon: 'type_eslint' },
  { name: '.gitignore', icon: 'type_git' },
  { name: 'next-env.d.ts', icon: 'type_typescriptdef' },
  { name: 'next.config.js', icon: 'type_next' },
  { name: 'package.json', icon: 'type_npm' },
  { name: 'postcss.config.js', icon: 'type_postcssconfig' },
  { name: 'README.md', icon: 'type_markdown' },
  { name: 'tailwind.config.ts', icon: 'type_tailwind' },
  { name: 'tsconfig.json', icon: 'type_tsconfig' },
  { name: 'yarn.lock', icon: 'type_yarn' },
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