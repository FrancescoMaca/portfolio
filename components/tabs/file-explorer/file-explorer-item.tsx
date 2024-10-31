import React, { RefObject, useEffect, useState } from 'react';
import File from './file';
import { useDispatch } from 'react-redux';
import { addTab } from '@/components/redux/slices/editor-tab-slice';
import { useWindowWidth } from '@react-hook/window-size';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { setItemCollapse } from '@/components/redux/slices/toolbox-slice';

interface FileExplorerItemProps {
  item: {
    name: string | string[];
    icon: string;
    hasErrors?: boolean;
    isFolder?: boolean;
    children?: FileExplorerItemProps['item'][];
    isOpenByDefault?: boolean;
    isLink?: boolean;
  };
  level: number;
  allCollapsed: boolean;
  parentPanel?: RefObject<ImperativePanelHandle>;
}

export default function FileExplorerItem({ item, level, allCollapsed, parentPanel }: FileExplorerItemProps) {
  // Must be used a useState to re-render the component
  const [isOpen, setIsOpen] = useState(item.isOpenByDefault);
  const dispatch = useDispatch()
  const width = useWindowWidth()

  useEffect(() => {
    if (item.isFolder) {
      setIsOpen(allCollapsed);
    }

  }, [allCollapsed, item.isFolder]);
  
  const toggleOpen = () => {
    if (item.isFolder) {
      setIsOpen(!isOpen);
    }

    // If the item should open itself in the editor when clicked
    if (!item.isFolder && item.isLink) {
      dispatch(addTab(item.name as string))

      // On mobile once you select a file the file explorer closes
      if (parentPanel?.current && width <= 768) {
        dispatch(setItemCollapse(true))
        parentPanel.current.collapse()
      }
    }
  };

  return (
    <>
      <File
        name={item.name}
        icon={item.icon}
        isFolder={item.isFolder}
        isOpen={item.isOpenByDefault}
        iconName={`/svg/ide/chevron-${isOpen ? 'down' : 'right'}.svg`}
        isLink={item.isLink}
        level={level}
        onToggle={toggleOpen}
        hasErrors={item.hasErrors}
      />
      {isOpen && item.children && (
        <div>
          {item.children.map((child, index) => (
            <FileExplorerItem key={index} item={child} level={level + 1} allCollapsed={allCollapsed} parentPanel={parentPanel}/>
          ))}
        </div>
      )}
    </>
  );
}