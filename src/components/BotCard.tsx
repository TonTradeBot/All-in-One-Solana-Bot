import React, { useState } from 'react';
import { Play, Square, Settings } from 'lucide-react';

interface BotCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function BotCard({ title, description, icon }: BotCardProps) {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <button 
          className="p-2 hover:bg-gray-100 rounded-lg"
          title="Settings"
        >
          <Settings className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className={`h-2 w-2 rounded-full ${isRunning ? 'bg-green-500' : 'bg-gray-300'}`} />
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
            isRunning 
              ? 'bg-red-100 text-red-600 hover:bg-red-200' 
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          {isRunning ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isRunning ? 'Stop' : 'Start'}</span>
        </button>
      </div>
    </div>
  );
}