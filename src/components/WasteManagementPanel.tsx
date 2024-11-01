import React from 'react';
import { Recycle, Trash2, Scale, BarChart3 } from 'lucide-react';
import { ResourceChart } from './ResourceChart';
import { DashboardCard } from './DashboardCard';
import { DownloadReport } from './DownloadReport';

const wasteData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Resíduos Recicláveis (kg)',
      data: [300, 320, 310, 350, 330, 342],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Resíduos Orgânicos (kg)',
      data: [200, 180, 190, 185, 195, 188],
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    }
  ],
};

const recyclingData = {
  labels: ['Papel', 'Plástico', 'Metal', 'Vidro', 'Orgânico', 'Outros'],
  datasets: [
    {
      label: 'Composição dos Resíduos (kg)',
      data: [120, 80, 60, 40, 188, 42],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export function WasteManagementPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Gestão de Resíduos</h2>
        <DownloadReport type="waste" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Reciclável"
          value="342 kg"
          icon={<Recycle className="w-6 h-6" />}
          trend={{ value: 5, isPositive: true }}
        />
        <DashboardCard
          title="Resíduo Orgânico"
          value="188 kg"
          icon={<Trash2 className="w-6 h-6" />}
          trend={{ value: 2, isPositive: false }}
        />
        <DashboardCard
          title="Taxa de Reciclagem"
          value="65%"
          icon={<Scale className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Meta Mensal"
          value="400 kg"
          icon={<BarChart3 className="w-6 h-6" />}
          trend={{ value: 0, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceChart
          title="Histórico de Resíduos"
          description="Comparativo mensal de resíduos recicláveis e orgânicos"
          data={wasteData}
        />
        <ResourceChart
          title="Composição dos Resíduos"
          description="Distribuição por tipo de material"
          data={recyclingData}
        />
      </div>
    </div>
  );
}