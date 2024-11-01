import React from 'react';
import { DashboardCard } from './DashboardCard';
import { Droplets, Zap, Recycle, Trophy } from 'lucide-react';

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Consumo de Água"
        value="2.431 L"
        icon={<Droplets className="w-6 h-6" />}
        trend={{ value: 12, isPositive: false }}
      />
      <DashboardCard
        title="Consumo de Energia"
        value="486 kWh"
        icon={<Zap className="w-6 h-6" />}
        trend={{ value: 8, isPositive: true }}
      />
      <DashboardCard
        title="Resíduos Coletados"
        value="342 kg"
        icon={<Recycle className="w-6 h-6" />}
        trend={{ value: 5, isPositive: true }}
      />
      <DashboardCard
        title="Pontos Eco"
        value="1.250"
        icon={<Trophy className="w-6 h-6" />}
        trend={{ value: 15, isPositive: true }}
      />
    </div>
  );
}