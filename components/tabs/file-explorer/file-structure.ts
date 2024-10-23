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
      { name: 'deploy.yml', icon: 'yaml', isLink: true }
    ]
  },
  {
    name: 'app',
    icon: 'app',
    isFolder: true,
    isOpenByDefault: true,
    isLink: true,
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
      {
        name: 'bottom-bar',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'console',
        icon: 'default',
        isFolder: true,
        children: [
          {
            name: 'commands',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'clear-command.ts', icon: 'typescript' },
              { name: 'command-handler.ts', icon: 'typescript' },
              { name: 'echo-command.ts', icon: 'typescript' },
              { name: 'help-command.ts', icon: 'typescript' },
              { name: 'index.ts', icon: 'typescript' },
              { name: 'ps-command.ts', icon: 'typescript' },
              { name: 'specific-commands.ts', icon: 'typescript' }
            ]
          },
          {
            name: 'contents',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'console-content.tsx', icon: 'reactts' },
              { name: 'output-content.tsx', icon: 'reactts' },
              { name: 'problems-content.tsx', icon: 'reactts' }
            ]
          },
          { name: 'index.tsx', icon: 'reactts' },
          {
            name: 'tabs',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'console-tab.tsx', icon: 'reactts' }
            ]
          }
        ]
      },
      {
        name: 'context-menu',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'editor',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' },
          {
            name: 'page-content',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'content-handler.ts', icon: 'typescript' },
              {
                name: 'contents',
                icon: 'default',
                isFolder: true,
                children: [
                  { name: 'pages-content-here.ts.zip', icon: 'zip' },
                ]
              },
              { name: 'default-page.tsx', icon: 'reactts' },
              { name: 'image-viewer.tsx', icon: 'reactts' },
              { name: 'md-viewer.tsx', icon: 'reactts' },
              { name: 'new-tab-names.ts', icon: 'typescript' },
              { name: 'pdf-viewer.tsx', icon: 'reactts' }
            ]
          },
          { name: 'tab.tsx', icon: 'reactts' },
          { name: 'text-editor.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'loading-screen',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'navbar',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'index.tsx', icon: 'reactts' }
        ]
      },
      {
        name: 'notification',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'notification-popup.tsx', icon: 'reactts' },
          { name: 'notification-provider.tsx', icon: 'reactts' }
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
              { name: 'console-commands-slice.ts', icon: 'typescript' },
              { name: 'console-slice.ts', icon: 'typescript' },
              { name: 'console-tab-slice.ts', icon: 'typescript' },
              { name: 'editor-tab-slice.ts', icon: 'typescript' },
              { name: 'ide-controls-slice.ts', icon: 'typescript' },
              { name: 'notification-slice.ts', icon: 'typescript' },
              { name: 'toolbox-slice.ts', icon: 'typescript' },
              { name: 'webpage-loading-slice.ts', icon: 'typescript' }
            ]
          }
        ]
      },
      {
        name: 'tabs',
        icon: 'default',
        isFolder: true,
        children: [
          {
            name: 'extensions',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'extension-entry.tsx', icon: 'reactts' }
            ]
          },
          { name: 'extensions.tsx', icon: 'reactts' },
          {
            name: 'file-explorer',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'file-explorer-item.tsx', icon: 'reactts' },
              { name: 'file-structure.ts', icon: 'typescript' },
              { name: 'file.tsx', icon: 'reactts' }
            ]
          },
          { name: 'file-explorer.tsx', icon: 'reactts' },
          { name: 'index.tsx', icon: 'reactts' },
          { name: 'run-and-debug.tsx', icon: 'reactts' },
          {
            name: 'source-control',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'commit-dropdown.tsx', icon: 'reactts' },
              { name: 'commit-finder.ts', icon: 'typescript' },
              { name: 'contributions-dropdown.tsx', icon: 'reactts' },
              { name: 'dropdown-entry.tsx', icon: 'reactts' },
              { name: 'parallax-card.tsx', icon: 'reactts' },
              { name: 'remotes-dropdown.tsx', icon: 'reactts' }
            ]
          },
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
      },
      {
        name: 'utils',
        icon: 'default',
        isFolder: true,
        children: [
          { name: 'console-logger.tsx', icon: 'reactts' },
          { name: 'helpers.ts', icon: 'typescript' },
          { name: 'highlight-panel-handler.tsx', icon: 'reactts' },
          { name: 'icon-hover.tsx', icon: 'reactts' },
          { name: 'ide-controls.tsx', icon: 'reactts' },
          { name: 'shortcut-manager.tsx', icon: 'reactts' },
          { name: 'toggle-button.tsx', icon: 'reactts' },
          { name: 'url-renderer.tsx', icon: 'reactts' }
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
          { name: 'resume.pdf', icon: 'pdf', isLink: true }
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
          { name: 'menlo-regular.ttf', icon: 'font' },
          { name: 'rutan-trial-bold.ttf', icon: 'font' },
          { name: 'rutan-trial-regular.ttf', icon: 'font' }
        ]
      },
      { name: 'manifest.json', icon: 'manifest' },
      {
        name: 'pictures',
        icon: 'images',
        isFolder: true,
        children: [
          { name: 'cracked-glass.png', icon: 'image' },
          { name: 'duck.png', icon: 'image' },
          { name: 'francesco-macaluso.webp', icon: 'image' },
          { name: 'gh-profile.png', icon: 'image' },
          { name: 'me.webp', icon: 'image' }
        ]
      },
      { name: 'robots.txt', icon: 'robots' },
      {
        name: 'svg',
        icon: 'default',
        isFolder: true,
        children: [
          {
            name: 'extensions',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'palette.svg', icon: 'image' }
            ]
          },
          {
            name: 'files',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'file_type_css.svg', icon: 'image' },
              { name: 'file_type_docker.svg', icon: 'image' },
              { name: 'file_type_error.svg', icon: 'image' },
              { name: 'file_type_eslint.svg', icon: 'image' },
              { name: 'file_type_font.svg', icon: 'image' },
              { name: 'file_type_git.svg', icon: 'image' },
              { name: 'file_type_html.svg', icon: 'image' },
              { name: 'file_type_image.svg', icon: 'image' },
              { name: 'file_type_ini.svg', icon: 'image' },
              { name: 'file_type_js.svg', icon: 'image' },
              { name: 'file_type_json.svg', icon: 'image' },
              { name: 'file_type_manifest.svg', icon: 'image' },
              { name: 'file_type_markdown.svg', icon: 'image' },
              { name: 'file_type_next.svg', icon: 'image' },
              { name: 'file_type_npm.svg', icon: 'image' },
              { name: 'file_type_pdf.svg', icon: 'image' },
              { name: 'file_type_postcssconfig.svg', icon: 'image' },
              { name: 'file_type_reactts.svg', icon: 'image' },
              { name: 'file_type_robots.svg', icon: 'image' },
              { name: 'file_type_shell.svg', icon: 'image' },
              { name: 'file_type_tailwind.svg', icon: 'image' },
              { name: 'file_type_text.svg', icon: 'image' },
              { name: 'file_type_tsconfig.svg', icon: 'image' },
              { name: 'file_type_typescript.svg', icon: 'image' },
              { name: 'file_type_typescriptdef.svg', icon: 'image' },
              { name: 'file_type_yaml.svg', icon: 'image' },
              { name: 'file_type_yarn.svg', icon: 'image' },
              { name: 'folder_type_app.svg', icon: 'image' },
              { name: 'folder_type_app_opened.svg', icon: 'image' },
              { name: 'folder_type_component.svg', icon: 'image' },
              { name: 'folder_type_component_opened.svg', icon: 'image' },
              { name: 'folder_type_default.svg', icon: 'image' },
              { name: 'folder_type_default_opened.svg', icon: 'image' },
              { name: 'folder_type_docker.svg', icon: 'image' },
              { name: 'folder_type_docker_opened.svg', icon: 'image' },
              { name: 'folder_type_favicon.svg', icon: 'image' },
              { name: 'folder_type_favicon_opened.svg', icon: 'image' },
              { name: 'folder_type_fonts.svg', icon: 'image' },
              { name: 'folder_type_fonts_opened.svg', icon: 'image' },
              { name: 'folder_type_github.svg', icon: 'image' },
              { name: 'folder_type_github_opened.svg', icon: 'image' },
              { name: 'folder_type_images.svg', icon: 'image' },
              { name: 'folder_type_images_opened.svg', icon: 'image' },
              { name: 'folder_type_light_redux.svg', icon: 'image' },
              { name: 'folder_type_light_redux_opened.svg', icon: 'image' },
              { name: 'folder_type_node.svg', icon: 'image' },
              { name: 'folder_type_node_opened.svg', icon: 'image' },
              { name: 'folder_type_public.svg', icon: 'image' },
              { name: 'folder_type_public_opened.svg', icon: 'image' }
            ]
          },
          {
            name: 'ide',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'account-inactive.svg', icon: 'image' },
              { name: 'account.svg', icon: 'image' },
              { name: 'arrow-left-inactive.svg', icon: 'image' },
              { name: 'arrow-left.svg', icon: 'image' },
              { name: 'arrow-right-inactive.svg', icon: 'image' },
              { name: 'arrow-right.svg', icon: 'image' },
              { name: 'bell-dot.svg', icon: 'image' },
              { name: 'bell.svg', icon: 'image' },
              { name: 'check.svg', icon: 'image' },
              { name: 'chevron-down.svg', icon: 'image' },
              { name: 'chevron-right.svg', icon: 'image' },
              { name: 'close.svg', icon: 'image' },
              { name: 'collapse-all.svg', icon: 'image' },
              { name: 'debug-alt-inactive.svg', icon: 'image' },
              { name: 'debug-alt.svg', icon: 'image' },
              { name: 'extensions-inactive.svg', icon: 'image' },
              { name: 'extensions.svg', icon: 'image' },
              { name: 'files-inactive.svg', icon: 'image' },
              { name: 'files.svg', icon: 'image' },
              { name: 'filter.svg', icon: 'image' },
              { name: 'git-merge-inactive.svg', icon: 'image' },
              { name: 'git-merge.svg', icon: 'image' },
              { name: 'globe.svg', icon: 'image' },
              { name: 'history.svg', icon: 'image' },
              { name: 'loading.svg', icon: 'image' },
              { name: 'more.svg', icon: 'image' },
              { name: 'new-file.svg', icon: 'image' },
              { name: 'new-folder.svg', icon: 'image' },
              { name: 'preview.svg', icon: 'image' },
              { name: 'refresh.svg', icon: 'image' },
              { name: 'rss.svg', icon: 'image' },
              { name: 'search-inactive.svg', icon: 'image' },
              { name: 'search.svg', icon: 'image' },
              { name: 'settings-gear-inactive.svg', icon: 'image' },
              { name: 'settings-gear.svg', icon: 'image' },
              { name: 'source-control-inactive.svg', icon: 'image' },
              { name: 'source-control.svg', icon: 'image' },
              { name: 'type-error.svg', icon: 'image' },
              { name: 'type-info.svg', icon: 'image' },
              { name: 'type-pass.svg', icon: 'image' },
              { name: 'type-warning.svg', icon: 'image' },
              { name: 'verified.svg', icon: 'image' },
              { name: 'vm-connect-inactive.svg', icon: 'image' },
              { name: 'vm-connect.svg', icon: 'image' },
              { name: 'vscode-logo.svg', icon: 'image' }
            ]
          },
          {
            name: 'other',
            icon: 'default',
            isFolder: true,
            children: [
              { name: 'clang.svg', icon: 'image' },
              { name: 'cpp.svg', icon: 'image' },
              { name: 'csharp.svg', icon: 'image' },
              { name: 'datastructure.svg', icon: 'image' },
              { name: 'docker.svg', icon: 'image' },
              { name: 'firebase.svg', icon: 'image' },
              { name: 'flutter.svg', icon: 'image' },
              { name: 'git.svg', icon: 'image' },
              { name: 'java.svg', icon: 'image' },
              { name: 'javascript.svg', icon: 'image' },
              { name: 'mongodb.svg', icon: 'image' },
              { name: 'nodejs.svg', icon: 'image' },
              { name: 'react.svg', icon: 'image' },
              { name: 'typescript.svg', icon: 'image' }
            ]
          }
        ]
      }
    ]
  },
  { name: '.dockerignore', icon: 'docker', isLink: true },
  { name: '.env', icon: 'ini', isLink: true },
  { name: '.env.sample', icon: 'shell', isLink: true },
  { name: '.eslintrc.json', icon: 'eslint', isLink: true },
  { name: '.gitignore', icon: 'git', isLink: true },
  { name: 'next-env.d.ts', icon: 'typescriptdef', isLink: true },
  { name: 'next.config.js', icon: 'next', isLink: true },
  { name: 'package.json', icon: 'npm', isLink: true },
  { name: 'postcss.config.js', icon: 'postcssconfig', isLink: true },
  { name: 'README.md', icon: 'markdown', isLink: true },
  { name: 'tailwind.config.ts', icon: 'tailwind', isLink: true },
  { name: 'tsconfig.json', icon: 'tsconfig', isLink: true },
  { name: 'yarn.lock', icon: 'yarn', isLink: true }
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