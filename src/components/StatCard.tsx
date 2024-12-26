import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp className="w-4 h-4 mr-1" />
            {change}
          </div>
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}