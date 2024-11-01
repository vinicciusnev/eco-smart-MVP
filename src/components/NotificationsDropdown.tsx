import React, { useState } from 'react';
import { Bell, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    type: 'success',
    message: 'Meta de economia de água atingida! Economia de 15% este mês.',
    time: '5 min atrás',
    icon: CheckCircle,
    color: 'text-emerald-600 bg-emerald-50',
    read: false
  },
  {
    id: 2,
    type: 'warning',
    message: 'Consumo de energia próximo ao limite mensal.',
    time: '30 min atrás',
    icon: AlertTriangle,
    color: 'text-amber-600 bg-amber-50',
    read: false
  },
  {
    id: 3,
    type: 'error',
    message: 'Coleta de resíduos atrasada no Setor B.',
    time: '1 hora atrás',
    icon: XCircle,
    color: 'text-red-600 bg-red-50',
    read: false
  }
];

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const hasUnread = notifications.some(n => !n.read);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <h3 className="font-medium text-gray-900">Notificações</h3>
          </div>
          {hasUnread && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-emerald-600 hover:text-emerald-700"
            >
              Marcar todas como lidas
            </button>
          )}
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 ${
              notification.read ? 'opacity-75' : ''
            }`}
          >
            <div className="flex gap-3">
              <div className={`p-2 rounded-full ${notification.color}`}>
                <notification.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 text-center">
        <button className="text-sm text-emerald-600 hover:text-emerald-700">
          Ver todas as notificações
        </button>
      </div>
    </div>
  );
}