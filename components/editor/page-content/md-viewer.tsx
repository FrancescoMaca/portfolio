import HighlightHandler from "@/components/utils/highlight-panel-handler"
import { getPanelElement, ImperativePanelHandle, Panel, PanelGroup, PanelProps } from "react-resizable-panels"
import TextEditor from "../text-editor"
import { getEditorContent } from "./content-handler"
import MarkdownPreview from '@uiw/react-markdown-preview'
import { useEffect, useRef } from "react"

interface MarkdownEditorProps {
  name: string
}

export default function MarkdownEditor({ name }: MarkdownEditorProps) {

  const previewRef = useRef<ImperativePanelHandle>(null)

  const openPreview = () => {
    previewRef.current.expand()
  }

  return (
    <>
      <PanelGroup direction={"horizontal"}>
        <Panel minSize={20} defaultSize={70} collapsedSize={0} collapsible
          className="relative"
        >
          <button className="absolute top-2 right-5 p-1 rounded-md bg-editor hover:bg-hover-dark z-10"
            onClick={openPreview}
          >
            <img src="/svg/ide/preview.svg" alt="Preview Icon" title="" width={24}/>
          </button>
          <TextEditor currentPage={name} />
        </Panel>
        <HighlightHandler />
        <Panel ref={previewRef} minSize={30} defaultSize={30} collapsedSize={0} collapsible>
          <MarkdownPreview className="p-10 h-full !bg-editor text-text-normal overflow-y-auto"
            source={getEditorContent(name, false)}>
          </MarkdownPreview>
        </Panel>
      </PanelGroup>
    </>
  )
}