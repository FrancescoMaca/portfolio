export function ResumeTitle({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full py-3 my-2 border-y-2 border-white">
      <h3 className="text-center text-s">{children}</h3>
    </div>
  )
}