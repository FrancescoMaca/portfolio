import { useHotkeys } from "react-hotkeys-hook"
import { addTab } from "../redux/slices/editor-tab-slice"
import { getRandomFunnyFileName } from "../editor/page-content/new-tab-names"
import { useDispatch } from "react-redux"

export default function ShortcutManager() {
  const dispatch = useDispatch()

  useHotkeys('alt+n', () => {
    dispatch(addTab(getRandomFunnyFileName()))
  })
  
  return (
    <></>
  )
}