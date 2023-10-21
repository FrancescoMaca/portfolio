export default function TabContainer({children}: {children: React.ReactNode}) {
    return (
    <div className="flex border-b-2 border-light-gray bg-dark-gray">
        {children}
    </div>
    )
}