
export const fileStructure = [
  {
    name: ['.docker', 'deployment', 'react', 'frontend'],
    icon: 'type_docker',
    isFolder: true,
    children: [
      { name: 'Dockerfile', icon: 'type_docker' }
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
  { name: 'README.md', icon: 'type_markdown' },
  {
    name: 'app',
    icon: 'type_app',
    isFolder: true,
    children: [
      { name: 'globals.css', icon: 'type_css' },
      { name: 'layout.tsx', icon: 'type_reactts' },
      { name: 'page.tsx', icon: 'type_reactts' }
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
  { name: 'lordicons-types.ts', icon: 'type_typescript' },
  { name: 'next.config.js', icon: 'type_next' },
  { name: 'package.json', icon: 'type_json' },
  { name: 'postcss.config.js', icon: 'type_postcssconfig' },
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
          { name: 'resume-picture.webp', icon: 'type_image' }
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
  { name: 'tailwind.config.ts', icon: 'type_tailwind' },
  { name: 'tsconfig.json', icon: 'type_tsconfig' },
  { name: 'yarn.lock', icon: 'type_yarn' },
  {
    name: 'node_modules',
    icon: 'type_node',
    isFolder: true,
    children: [
      { name: 'random-package.garb', icon: 'type_garb' }
    ]
  }
];
