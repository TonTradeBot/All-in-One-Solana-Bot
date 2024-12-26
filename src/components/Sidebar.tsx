import React, { useState } from 'react';
import {
  Rocket,
  Coins,
  RefreshCw,
  FileSearch,
  BarChart2,
  Network,
  Wallet,
  Send,
  Package,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { MenuItem } from './MenuItem';

const menuItems = [
  { icon: <Rocket className="w-5 h-5" />, label: 'Pump Launch and Buy', isNew: true },
  { icon: <Coins className="w-5 h-5 text-gradient-primary" />, label: 'Claim Your Sol' },
  { icon: <RefreshCw className="w-5 h-5" />, label: 'Batch Swap' },
  { icon: <FileSearch className="w-5 h-5" />, label: 'Sol Contract Audit' },
  { icon: <BarChart2 className="w-5 h-5" />, label: 'Create Market ID' },
  { icon: <Network className="w-5 h-5" />, label: 'Liquidity Manage' },
  { icon: <Coins className="w-5 h-5" />, label: 'Create Token', isNew: true },
  { icon: <Send className="w-5 h-5" />, label: 'Token MultiSender' },
  { icon: <Package className="w-5 h-5" />, label: 'Token Batch Collection' },
  { icon: <Wallet className="w-5 h-5" />, label: 'Create Wallet' },
  { icon: <Users className="w-5 h-5" />, label: 'Scan Token Holders' }
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    } min-h-screen relative`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-purple-600 rounded-full p-1 hover:bg-purple-700 transition-colors"
      >
        {isCollapsed ? 
          <ChevronRight className="w-4 h-4" /> : 
          <ChevronLeft className="w-4 h-4" />
        }
      </button>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Coins className="w-8 h-8 text-gradient-primary" />
          {!isCollapsed && <span className="text-xl font-bold">All in One Solana Bot</span>}
        </div>

        <nav>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}