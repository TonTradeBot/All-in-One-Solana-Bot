import { type ReactNode } from 'react';

export interface BotConfig {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BotCardProps extends BotConfig {
  onSettingsClick?: () => void;
  onToggle?: (isRunning: boolean) => void;
}