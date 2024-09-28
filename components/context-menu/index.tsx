import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { closeAllTabs, closeOtherTabs, closeTab } from '../redux/slices/editor-tab-slice';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  tabName: string;
}

export default function ContextMenu({ x, y, onClose, tabName }: ContextMenuProps) {
  const dispatch = useDispatch();

  const menuItems = [
    { label: 'Close', action: () => dispatch(closeTab(tabName)) },
    { label: 'Close Others', action: () => dispatch(closeOtherTabs(tabName)) },
    { label: 'Close All', action: () => dispatch(closeAllTabs()) },
  ];

  return (
    <div 
      className="absolute bg-editor border border-border-panel rounded shadow-lg py-2 z-50"
      style={{ top: y, left: x }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 hover:bg-hover-dark cursor-pointer"
          onClick={() => {
            item.action();
            onClose();
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};