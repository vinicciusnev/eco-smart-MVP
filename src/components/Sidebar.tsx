import React from 'react';
import { 
  LayoutDashboard, 
  Droplets, 
  Zap, 
  Recycle,
  Bell, 
  Trophy,
  Store,
  Settings
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Painel Principal' },
  { id: 'water', icon: Droplets, label: 'Consumo de Água' },
  { id: 'energy', icon: Zap, label: 'Consumo de Energia' },
  { id: 'waste', icon: Recycle, label: 'Gestão de Resíduos' },
  { id: 'alerts', icon: Bell, label: 'Alertas' },
  { id: 'gamification', icon: Trophy, label: 'Gamificação' },
  { id: 'marketplace', icon: Store, label: 'Marketplace' },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Recycle className="w-8 h-8 text-emerald-600" />
          <span className="text-xl font-bold text-gray-800">EcoSmart</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm
                  ${activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          <Settings className="w-5 h-5" />
          Configurações
        </button>
      </div>
    </div>
  );
}