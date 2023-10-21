import Tab from "./tab"

interface TabContainerProps {
    children: React.ReactNode
}

export default function TabContainer({children}: TabContainerProps) {
    return (
    <div className="flex border-b-2 border-light-gray">
        {children}
    </div>
    )
}