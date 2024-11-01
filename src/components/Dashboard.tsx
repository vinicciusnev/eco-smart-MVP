import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { DashboardCards } from './DashboardCards';
import { ResourceChart } from './ResourceChart';
import { AlertsPanel } from './AlertsPanel';
import { MarketplacePanel } from './MarketplacePanel';
import { GamificationPanel } from './GamificationPanel';
import { WaterUsagePanel } from './WaterUsagePanel';
import { EnergyUsagePanel } from './EnergyUsagePanel';
import { WasteManagementPanel } from './WasteManagementPanel';

const consumptionData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Água (L)',
      data: [2100, 2300, 2000, 2400, 2200, 2431],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Energia (kWh)',
      data: [450, 420, 480, 460, 490, 486],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
    },
  ],
};

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
    },
  ],
};

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <DashboardCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <ResourceChart
                title="Tendências de Consumo"
                description="Monitore seus padrões diários de consumo de recursos"
                data={consumptionData}
              />
              <ResourceChart
                title="Análise de Resíduos"
                description="Acompanhe métricas de coleta e reciclagem"
                data={wasteData}
              />
            </div>
          </>
        );
      case 'water':
        return <WaterUsagePanel />;
      case 'energy':
        return <EnergyUsagePanel />;
      case 'waste':
        return <WasteManagementPanel />;
      case 'alerts':
        return <AlertsPanel />;
      case 'marketplace':
        return <MarketplacePanel />;
      case 'gamification':
        return <GamificationPanel />;
      default:
        return <DashboardCards />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}