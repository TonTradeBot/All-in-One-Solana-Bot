import React from 'react';
import { BotCard } from './BotCard';
import { bots } from './botConfig';

export function BotControls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {bots.map((bot, index) => (
        <BotCard 
          key={index} 
          {...bot}
          onSettingsClick={() => console.log(`Settings clicked for ${bot.title}`)}
          onToggle={(isRunning) => console.log(`${bot.title} is now ${isRunning ? 'running' : 'stopped'}`)}
        />
      ))}
    </div>
  );
}