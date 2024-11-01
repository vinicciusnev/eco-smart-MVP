export interface ResourceData {
  id: string;
  type: 'water' | 'energy' | 'waste';
  value: number;
  unit: string;
  timestamp: string;
}

export interface Alert {
  id: string;
  type: 'success' | 'warning' | 'danger';
  message: string;
  timestamp: string;
}

export interface GameScore {
  points: number;
  level: number;
  badges: string[];
  achievements: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  organization: string;
  gameScore: GameScore;
}