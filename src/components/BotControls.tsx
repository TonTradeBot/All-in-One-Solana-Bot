import React from 'react';
import { Rocket, Coins, RefreshCw, Zap, Network, Send, Package, Users } from 'lucide-react';
import { BotCard } from './BotCard';

const bots = [
  {
    title: 'Pump Detection',
    description: 'Automatically detect and participate in token pumps',
    icon: <Rocket className="w-5 h-5" />
  },
  {
    title: 'Auto Claim',
    description: 'Claim SOL rewards automatically when available',
    icon: <Coins className="w-5 h-5" />
  },
  {
    title: 'Batch Swap',
    description: 'Execute multiple token swaps in a single transaction',
    icon: <RefreshCw className="w-5 h-5" />
  },
  {
    title: 'Sniper Bot',
    description: 'Instantly buy tokens when they meet your criteria',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Liquidity Monitor',
    description: 'Track and analyze liquidity pool changes',
    icon: <Network className="w-5 h-5" />
  },
  {
    title: 'Ai Scalping Bot',
    description: 'Artificial intelligence-powered scalp trading bot',
    icon: <Send className="w-5 h-5" />
  },
  {
    title: 'Copy Trade Bot',
    description: 'You can copy all trading transactions of any wallet you want',
    icon: <Package className="w-5 h-5" />
  },
  {
    title: 'Yield Farming Bot',
    description: 'Automates investments in liquidity pools for maximum returns',
    icon: <Users className="w-5 h-5" />
  }
];

export function BotControls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {bots.map((bot, index) => (
        <BotCard key={index} {...bot} />
      ))}
    </div>
  );
}