
export default function BottomBar() {
  return (
    <div className="flex justify-between p-2 border-t-[1px] border-t-border-panel text-text-normal">
      <div className="flex items-center gap-2">
        <span>©</span>
        <span className="text-sm">{new Date().getFullYear()} Francesco Macaluso</span>
      </div>
      <div>
        <span>Go Live</span>
      </div>
    </div>
  )
}