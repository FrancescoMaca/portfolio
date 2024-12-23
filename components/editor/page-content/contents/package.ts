import { PageContent } from "../content-handler";

export const packageContent: PageContent = {
  content: `{
  "name": "My Pretty VS Code Portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.5",
    "@types/sfcookies": "^1.0.5",
    "flowbite": "^2.5.1",
    "flowbite-react": "^0.10.1",
    "framer-motion": "^10.16.4",
    "next": "13.5.6",
    "react": "^18",
    "react-dom": "^18",
    "react-redux": "^9.1.2",
    "react-resizable-panels": "^2.1.3",
    "react-syntax-highlighter": "^15.5.0",
    "redux": "^5.0.1",
    "sfcookies": "^1.0.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/react-redux": "^7.1.33",
    "@types/react-syntax-highlighter": "^15.5.13",
    "@types/redux": "^3.6.0",
    "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "13.5.6",
    "postcss": "^8",
    "tailwindcss": "^3",
    "typescript": "^5"
  }
}
`
}