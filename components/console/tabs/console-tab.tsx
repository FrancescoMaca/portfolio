
interface ConsoleTabProps {
  name: string;
}

export default function ConsoleTab({ name }: ConsoleTabProps) {
  return (
    <div className="flex items-center justify-center bg-dark px-2">
      <span className="p-3 text-text-normal border-b border-b-accent">{name}</span>
    </div>
  )
}