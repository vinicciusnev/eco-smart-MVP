import React from 'react';
import { Trophy, Award, Star, Target } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Mestre da Economia',
    description: 'Reduziu o consumo de água em 20% este mês',
    points: 500,
    progress: 75,
    icon: Trophy
  },
  {
    id: 2,
    title: 'Reciclador Elite',
    description: 'Reciclou mais de 100kg de materiais',
    points: 300,
    progress: 90,
    icon: Award
  },
  {
    id: 3,
    title: 'Energia Consciente',
    description: 'Manteve consumo de energia abaixo da meta por 3 meses',
    points: 400,
    progress: 60,
    icon: Star
  }
];

const rankings = [
  { position: 1, name: 'Edifício Green Tower', points: 2500 },
  { position: 2, name: 'Condomínio Solar', points: 2300 },
  { position: 3, name: 'Empresarial Eco', points: 2100 },
];

export function GamificationPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-semibold text-gray-800">Sistema de Gamificação</h2>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600" />
            <span className="text-lg font-medium text-gray-700">1.250 pontos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Conquistas</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <achievement.icon className="w-8 h-8 text-emerald-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-emerald-600">{achievement.points} pontos</span>
                        <span className="text-gray-500">{achievement.progress}% completo</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Ranking</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {rankings.map((rank) => (
                <div
                  key={rank.position}
                  className="flex items-center justify-between py-3 border-b last:border-0 border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full 
                      ${rank.position === 1 ? 'bg-yellow-100 text-yellow-600' :
                        rank.position === 2 ? 'bg-gray-100 text-gray-600' :
                        'bg-orange-100 text-orange-600'}`}
                    >
                      {rank.position}
                    </span>
                    <span className="font-medium text-gray-800">{rank.name}</span>
                  </div>
                  <span className="text-emerald-600 font-medium">{rank.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}