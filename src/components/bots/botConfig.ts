import { Rocket, Coins, RefreshCw, Zap, Network, Brain, Users, Sprout } from 'lucide-react';
import { type BotConfig } from './types';

export const bots: BotConfig[] = [
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
    title: 'AI Scalping Bot',
    description: 'AI-powered quick trades for small, frequent profits',
    icon: <Brain className="w-5 h-5" />
  },
  {
    title: 'Copy Trade Bot',
    description: 'Automatically mirror successful traders\' positions',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'Yield Farming Bot',
    description: 'Automate yield farming strategies for optimal returns',
    icon: <Sprout className="w-5 h-5" />
  }
];