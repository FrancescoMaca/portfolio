import React, { useState } from 'react';
import File from './file';

interface FileExplorerItemProps {
  item: {
    name: string | string[];
    icon: string;
    isFolder?: boolean;
    children?: FileExplorerItemProps['item'][];
    isOpenByDefault?: boolean;
  };
  level: number;
}

export default function FileExplorerItem({ item, level }: FileExplorerItemProps) {
  const [isOpen, setIsOpen] = useState(item.isOpenByDefault);

  const toggleOpen = () => {
    if (item.isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <File
        name={item.name}
        icon={item.icon}
        isFolder={item.isFolder}
        isOpen={item.isOpenByDefault}
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