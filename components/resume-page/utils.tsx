export function ResumeTitle({icon, children}: {icon: string, children: React.ReactNode}) {
  return (
    <div className="flex justify-center w-full py-3 my-2 border-y-2 border-white">
      <h3 className="flex items-center text-center text-s">
        <span className="pr-2">{children}</span>
        <img src={`/svg/resume/${icon}`} alt="title icon" width={32} height={32}/>
      </h3>
    </div>
  )
}