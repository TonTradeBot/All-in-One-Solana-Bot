import React from 'react';
import { LineChart, Users, Zap, MessageCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { BotControls } from './BotControls';

const stats = [
  {
    title: 'Total Transactions',
    value: '234,567',
    change: '+12.5%',
    icon: <LineChart className="w-6 h-6" />
  },
  {
    title: 'Bot Success Rate',
    value: '89.2%',
    change: '+5.2%',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Active Users',
    value: '1,242',
    change: '+8.1%',
    icon: <Users className="w-6 h-6" />
  }
];

export function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Bot Controls</h2>
        <BotControls />
      </div>

      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-green-400 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}