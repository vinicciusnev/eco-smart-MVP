import React from 'react';
import { Droplets, Waves, CloudRain, Timer } from 'lucide-react';
import { ResourceChart } from './ResourceChart';
import { DashboardCard } from './DashboardCard';
import { DownloadReport } from './DownloadReport';

const waterData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Consumo de Água (L)',
      data: [2100, 2300, 2000, 2400, 2200, 2431],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

const dailyUsageData = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Consumo Diário (L)',
      data: [350, 380, 320, 400, 380, 290, 310],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    }
  ],
};

export function WaterUsagePanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Consumo de Água</h2>
        <DownloadReport type="water" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Consumo Total"
          value="2.431 L"
          icon={<Droplets className="w-6 h-6" />}
          trend={{ value: 12, isPositive: false }}
        />
        <DashboardCard
          title="Média Diária"
          value="347 L"
          icon={<Waves className="w-6 h-6" />}
          trend={{ value: 5, isPositive: true }}
        />
        <DashboardCard
          title="Economia do Mês"
          value="15%"
          icon={<CloudRain className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Meta Mensal"
          value="3.000 L"
          icon={<Timer className="w-6 h-6" />}
          trend={{ value: 0, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceChart
          title="Consumo Mensal"
          description="Histórico de consumo nos últimos 6 meses"
          data={waterData}
        />
        <ResourceChart
          title="Consumo Diário"
          description="Consumo ao longo da última semana"
          data={dailyUsageData}
        />
      </div>
    </div>
  );
}