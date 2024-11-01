import React from 'react';
import { Zap, Battery, Sun, Timer } from 'lucide-react';
import { ResourceChart } from './ResourceChart';
import { DashboardCard } from './DashboardCard';
import { DownloadReport } from './DownloadReport';

const energyData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Consumo de Energia (kWh)',
      data: [450, 420, 480, 460, 490, 486],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
    }
  ],
};

const peakHoursData = {
  labels: ['00h', '04h', '08h', '12h', '16h', '20h'],
  datasets: [
    {
      label: 'Consumo por Horário (kWh)',
      data: [15, 12, 25, 30, 28, 22],
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    }
  ],
};

export function EnergyUsagePanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Consumo de Energia</h2>
        <DownloadReport type="energy" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Consumo Total"
          value="486 kWh"
          icon={<Zap className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Pico de Consumo"
          value="30 kWh"
          icon={<Battery className="w-6 h-6" />}
          trend={{ value: 3, isPositive: false }}
        />
        <DashboardCard
          title="Energia Solar"
          value="120 kWh"
          icon={<Sun className="w-6 h-6" />}
          trend={{ value: 15, isPositive: true }}
        />
        <DashboardCard
          title="Meta Mensal"
          value="500 kWh"
          icon={<Timer className="w-6 h-6" />}
          trend={{ value: 0, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceChart
          title="Consumo Mensal"
          description="Histórico de consumo nos últimos 6 meses"
          data={energyData}
        />
        <ResourceChart
          title="Consumo por Horário"
          description="Distribuição do consumo ao longo do dia"
          data={peakHoursData}
        />
      </div>
    </div>
  );
}