import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}