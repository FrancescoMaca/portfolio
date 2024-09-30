import React, { useState } from 'react';
import File from './file';
import { useDispatch } from 'react-redux';
import { addTab } from '@/components/redux/slices/editor-tab-slice';

interface FileExplorerItemProps {
  item: {
    name: string | string[];
    icon: string;
    isFolder?: boolean;
    children?: FileExplorerItemProps['item'][];
    isOpenByDefault?: boolean;
    isLink?: boolean;
  };
  level: number;
}

export default function FileExplorerItem({ item, level }: FileExplorerItemProps) {
  const [isOpen, setIsOpen] = useState(item.isOpenByDefault);
  const dispatch = useDispatch()
  
  const toggleOpen = () => {
    if (item.isFolder) {
      setIsOpen(!isOpen);
    }

    // If the item should open itself in the editor when clicked
    if (!item.isFolder && item.isLink) {
      dispatch(addTab({ name: item.name as string, isLink: item.isLink }))
    }
  };

  return (
    <>
      <File
        name={item.name}
        icon={item.icon}
        isFolder={item.isFolder}
        isOpen={item.isOpenByDefault}
        iconName={`/svg/ide/chevron-${isOpen ? 'down' : 'right'}.svg`} // Gotta use this otherwise the component is not gonna re-render
        isLink={item.isLink}
        level={level}
        onToggle={toggleOpen}
      />
      {isOpen && item.children && (
        <div>
          {item.children.map((child, index) => (
            <FileExplorerItem key={index} item={child} level={level + 1}/>
          ))}
        </div>
      )}
    </>
  );
}