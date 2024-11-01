import React from 'react';
import { Bell, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import type { Alert } from '../types';

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'success',
    message: 'Meta de economia de água atingida! Economia de 15% este mês.',
    timestamp: '2024-03-19T10:30:00Z'
  },
  {
    id: '2',
    type: 'warning',
    message: 'Consumo de energia próximo ao limite mensal.',
    timestamp: '2024-03-19T09:15:00Z'
  },
  {
    id: '3',
    type: 'danger',
    message: 'Coleta de resíduos atrasada no Setor B.',
    timestamp: '2024-03-19T08:45:00Z'
  }
];

const alertIcons = {
  success: CheckCircle,
  warning: AlertTriangle,
  danger: XCircle
};

const alertColors = {
  success: 'text-emerald-600 bg-emerald-50',
  warning: 'text-amber-600 bg-amber-50',
  danger: 'text-red-600 bg-red-50'
};

export function AlertsPanel() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Alertas e Notificações</h2>
          </div>
          <button className="text-sm text-emerald-600 hover:text-emerald-700">
            Marcar todos como lidos
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200">
        {mockAlerts.map((alert) => {
          const Icon = alertIcons[alert.type];
          return (
            <div key={alert.id} className="p-4 hover:bg-gray-50">
              <div className="flex gap-4">
                <div className={`p-2 rounded-full ${alertColors[alert.type]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 text-center border-t border-gray-200">
        <button className="text-sm text-emerald-600 hover:text-emerald-700">
          Ver todas as notificações
        </button>
      </div>
    </div>
  );
}