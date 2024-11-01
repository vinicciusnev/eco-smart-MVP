import React, { useState } from 'react';
import { ShoppingBag, Tag, ArrowRight, Plus } from 'lucide-react';
import toast from 'react-hot-toast';
import { AddItemModal } from './AddItemModal';

interface RecyclableItem {
  id: string;
  name: string;
  type: string;
  quantity: string;
  price: number;
  image: string;
}

const initialItems: RecyclableItem[] = [
  {
    id: '1',
    name: 'Caixas de Papelão',
    type: 'Papel',
    quantity: '500 kg',
    price: 750,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    name: 'Garrafas PET',
    type: 'Plástico',
    quantity: '200 kg',
    price: 400,
    image: 'https://images.unsplash.com/photo-1597106087825-9cb2e6c5250b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    name: 'Sucata Metálica',
    type: 'Metal',
    quantity: '1000 kg',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

export function MarketplacePanel() {
  const [items, setItems] = useState(initialItems);
  const [showAddModal, setShowAddModal] = useState(false);
  const [ecoPoints, setEcoPoints] = useState(1250); // Estado para pontos do usuário

  const handlePurchase = (item: RecyclableItem) => {
    if (ecoPoints >= item.price) {
      const newPoints = ecoPoints - item.price;
      setEcoPoints(newPoints);
      
      // Remover item da lista
      setItems(items.filter(i => i.id !== item.id));
      
      // Adicionar notificação de compra bem-sucedida
      toast.success(
        <div>
          <p>Item adquirido com sucesso!</p>
          <p className="text-sm text-gray-600">
            {item.name} - {item.price} pontos
          </p>
          <p className="text-sm text-emerald-600">
            Saldo atual: {newPoints} pontos
          </p>
        </div>
      );
    } else {
      toast.error('Saldo de pontos insuficiente para esta compra!');
    }
  };

  const handleAddItem = (newItem: RecyclableItem) => {
    setItems([...items, { ...newItem, id: String(items.length + 1) }]);
    setShowAddModal(false);
    toast.success('Item adicionado com sucesso!');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Marketplace de Recicláveis</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-emerald-600">
              Saldo: {ecoPoints} pontos
            </span>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4" />
              Anunciar Item
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-gray-600">{item.type}</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{item.quantity}</span>
                <span className="font-medium text-emerald-600">{item.price} pontos</span>
              </div>
              <button
                onClick={() => handlePurchase(item)}
                className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                Adquirir com Pontos
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddItemModal onClose={() => setShowAddModal(false)} onAdd={handleAddItem} />
      )}
    </div>
  );
}
