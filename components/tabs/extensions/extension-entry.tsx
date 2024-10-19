
interface ExtensionEntryProps {
  name: string;
  description: string;
}

export function ExtensionEntry({ name, description }: ExtensionEntryProps) {
  return (
    <div className="flex hover:bg-hover-dark px-3 py-2 text-text-normal">
      <div className="flex items-center justify-center w-20 h-20 shrink-0">
        <img 
          src="https://picsum.photos/80/80" 
          alt="Extension Icon"
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col pl-5 w-full min-w-0 justify-between">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold text-white truncate pr-4">{name}</span>
          <div className="flex gap-2 items-center shrink-0">
            <img src="/svg/ide/history.svg" alt="Time Icon" width={16} height={16} />
            <span>{Math.floor(Math.random() * 500)}ms</span>
          </div>
        </div>
        
        <p className="truncate">
          {description}
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center min-w-0">
            <img src="/svg/ide/verified.svg" alt="Verified Badge" width={16} height={16} className="min-w-[16px]" />
            <span className="truncate">FrancescoMaca</span>
          </div>
          <button className="px-1 bg-accent rounded-md shrink-0 ml-2">
            Add Extensions
          </button>
        </div>
      </div>
    </div>
  )
}

export function ComingMoreExtEntry() {
  return (
    <div className="flex hover:bg-hover-dark px-3 py-2 text-text-normal">
      <div className="flex items-center justify-center w-20 h-20 shrink-0">
        <img 
          src="https://picsum.photos/80/80" 
          alt="Extension Icon"
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col pl-5 w-full min-w-0 justify-between">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold text-white truncate pr-4">{'Don\'t worry'}</span>
          <div className="flex gap-2 items-center shrink-0">
            <img src="/svg/ide/history.svg" alt="Time Icon" width={16} height={16} />
            <span>{Math.floor(Math.random() * 500)}ms</span>
          </div>
        </div>
        
        <p className="truncate">
          More extensions are coming whenever I feel like!
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center min-w-0">
            <img src="/svg/ide/verified.svg" alt="Verified Badge" width={16} height={16} className="min-w-[16px]" />
            <span className="truncate">FrancescoMaca</span>
          </div>
        </div>
      </div>
    </div>
  )
}