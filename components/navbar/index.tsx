import { Panel, PanelResizeHandle } from "react-resizable-panels";


export default function Navbar() {
  return (
    <>
      <Panel className="flex justify-center bg-dark py-1 border-b-border-panel border-b-2" defaultSize={3} minSize={3} maxSize={3}>
        <div className="flex gap-4">
          <img src="/svg/ide/arrow-left.svg" alt="arrow left" title="" width={20} />
          <img src="/svg/ide/arrow-right.svg" alt="arrow right" title=""  width={20} />
        </div>
        <input className="
            tracking-[-.05em] bg-input text-text-unfocused min-w-[400px] ml-5 px-6 text-center rounded-lg
          border-border-input border-2 outline-none placeholder:text-text-unfocused focus:text-left focus:placeholder:text-input
          "
          placeholder={'francesco-vs-code'}
        />
      </Panel>
      <PanelResizeHandle/>
    </>
  )
}