'use client'

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getPageContent } from "./page-content/content-handler";
import { CSSProperties } from "react";

export default function TextEditor({ currentPage }: { currentPage: string }) {
  
  return (
    <div className="flex w-full h-full flex-col bg-editor text-white font-mono text-sm">
      <div className="flex-grow overflow-auto">
        <div className="flex">
          <SyntaxHighlighter
            customStyle={editorStyle}
            lineNumberStyle={lineNumberStyle}
            language='typescript'
            style={atomOneDark}
            showLineNumbers={true}
          >
            { getPageContent(currentPage) }
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}


const editorStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#1E1E1E',
  padding: '10px 30px',
  color: '#cccccc'
}

const lineNumberStyle: CSSProperties = {
  color: '#717680'
}