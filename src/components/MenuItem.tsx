import React from 'react';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isNew?: boolean;
  isCollapsed: boolean;
}

export function MenuItem({ icon, label, isNew, isCollapsed }: MenuItemProps) {
  return (
    <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-900/50 transition-colors mb-1 group relative">
      <div className="relative">
        {icon}
      </div>
      {!isCollapsed && (
        <span className="text-sm">{label}</span>
      )}
      {isNew && (
        <span className={`absolute ${isCollapsed ? 'right-0 top-0' : 'right-2'} bg-green-500 text-xs px-2 py-0.5 rounded-full`}>
          NEW
        </span>
      )}
      {isCollapsed && (
        <div className="absolute left-full ml-2 py-1 px-2 bg-gray-800 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </div>
      )}
    </a>
  );
}