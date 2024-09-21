'use client'

import { useEffect, useId } from "react";
import { getResizeHandleElement, PanelResizeHandle } from "react-resizable-panels";

export default function HighlightHandler({ horizontal = false }: { horizontal?: boolean }) {
  const uniqueId = useId();
  const resizeHandleId = `resize-handle-${uniqueId}`;

  useEffect(() => {
    const handle = getResizeHandleElement(resizeHandleId);
    if (!handle) return; // Safety check in case the element isn't found

    const observer = new MutationObserver((_) => {
      const handleState = handle.getAttribute('data-resize-handle-state');
      if (handleState === 'inactive') {
        handle.classList.remove(horizontal ? '!border-y-accent' : '!border-x-accent');
      } else {
        handle.classList.add(horizontal ? '!border-y-accent' : '!border-x-accent');
      }
    });

    observer.observe(handle, { attributeFilter: ['data-resize-handle-state'] });

    return () => {
      observer.disconnect();
    };
  }, [horizontal, resizeHandleId]);
  
  return (
    <PanelResizeHandle 
      id={resizeHandleId}
      className={`border-b-dark border-l-dark
        ${horizontal
          ? 'hover:w-full border-t-border-panel !hover:cursor-row-resize border-y-2' 
          : 'hover:h-full border-r-border-panel !hover:cursor-col-resize border-x-2'
        }
        transition-colors duration-300
      `} 
    />
  );
}