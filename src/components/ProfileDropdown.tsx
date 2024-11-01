import React, { useState } from 'react';
import { User, Settings, LogOut, Camera } from 'lucide-react';
import { EditProfileModal } from './EditProfileModal';

export function ProfileDropdown() {
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <>
      <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
        <div className="p-2">
          <button
            onClick={() => setShowEditProfile(true)}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <User className="w-4 h-4" />
            Editar Perfil
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <Settings className="w-4 h-4" />
            Configurações
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </div>
      {showEditProfile && <EditProfileModal onClose={() => setShowEditProfile(false)} />}
    </>
  );
}