import React from 'react';
import { FileDown } from 'lucide-react';
import toast from 'react-hot-toast';

interface DownloadReportProps {
  type: 'water' | 'energy' | 'waste';
}

export function DownloadReport({ type }: DownloadReportProps) {
  const handleDownload = (format: 'xlsx' | 'pdf') => {
    // Simulando download
    const types = {
      water: 'Consumo de Água',
      energy: 'Consumo de Energia',
      waste: 'Gestão de Resíduos'
    };
    
    toast.success(`Relatório de ${types[type]} baixado em formato ${format.toUpperCase()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleDownload('xlsx')}
        className="flex items-center gap-1 px-3 py-1 text-sm text-emerald-600 hover:bg-emerald-50 rounded-md"
      >
        <FileDown className="w-4 h-4" />
        XLSX
      </button>
      <button
        onClick={() => handleDownload('pdf')}
        className="flex items-center gap-1 px-3 py-1 text-sm text-emerald-600 hover:bg-emerald-50 rounded-md"
      >
        <FileDown className="w-4 h-4" />
        PDF
      </button>
    </div>
  );
}