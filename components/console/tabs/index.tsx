import ConsoleTab from "./console-tab"

export default function Tabs() {

  const tabs = [
    "Problems",
    "Output",
    "Console"
  ]

  return (
    <div className="bg-dark">
      <div className="flex">
        {
          tabs.map(tabName => 
            <ConsoleTab name={tabName} />
          )
        }
      </div>
    </div>
  )
}