import { useHotkeys } from "react-hotkeys-hook"
import { addTab } from "../redux/slices/editor-tab-slice"
import { getRandomFunnyFileName } from "../editor/page-content/new-tab-names"
import { useDispatch } from "react-redux"
import { showNotification } from "../redux/slices/notification-slice"
import { generateUUID } from "./helpers"
import { bake_cookie, read_cookie } from "sfcookies"
import { setPendingCommand } from "../redux/slices/console-commands-slice"

export default function ShortcutManager() {
  const dispatch = useDispatch()

  useHotkeys('alt+n', () => {
    dispatch(addTab(getRandomFunnyFileName()))
  })

  useHotkeys('alt+t', () => {
    if (read_cookie('tried-toggling-light-mode')) {
      bake_cookie('tried-toggling-light-mode', '')
      dispatch(showNotification({
        id: generateUUID(),
        title: "Are you serious?",
        body: "Excuse me, are you trying to use a light theme? No because if you did not know yet, it's illegal in some states...",
        type: 'error',
        actionButton: "I didn't know indeed",
        actionButtonCb: "",
        secondaryButton: "Sorry",
        secondaryButtonCb: ""
      }))
    }
    else {
      dispatch(showNotification({
        id: generateUUID(),
        title: "Action Forbidden",
        body: "Warning: Attempting to activate light mode violates the International Treaty on Ocular Preservation (ITOP). Please keep away from the shortcut and keep your hands where we can see them.",
        type: 'error',
        actionButton: "Ok",
        actionButtonCb: "",
        secondaryButtonCb: "",
        timeout: 5000
      }))
    }
  })
  
  useHotkeys('meta+h', () => {
    dispatch(setPendingCommand('help'))
  })

  return (
    <></>
  )
}