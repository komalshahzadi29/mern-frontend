import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchItems, deleteItem } from '../../services/api';

export default function ViewItemsPage() {
    const [items, setItems] = useState([
        {
            id: '1',
            title: 'E-commerce Website',
            description: 'Built with React and Node.js',
            date: '2023-10-15',
            duration: '2 months'
        },
        
    {
      _id: '2',
      title: 'Task Manager App',
      description: 'Mobile app with Firebase',
      date: '2023-09-20',
      duration: '3 weeks'
    },
    {
      _id: '3',
      title: 'Portfolio Design',
      description: 'UI/UX for creative portfolio',
      date: '2023-11-05',
      duration: '1 month'
    },
    {
      _id: '4',
      title: 'Weather Dashboard',
      description: 'Real-time weather API integration',
      date: '2023-08-12',
      duration: '2 weeks'
    },
    {
      _id: '5',
      title: 'Chat Application',
      description: 'Socket.io based messaging',
      date: '2023-12-01',
      duration: '6 weeks'
    },
    {
      _id: '6',
      title: 'Inventory System',
      description: 'For retail management',
      date: '2024-01-10',
      duration: '2 months'
    }
  ]);

  // ... (keep all existing state and logic exactly the same)

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Projects</h1>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-700 mt-1">{item.description}</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>Date: {item.date}</span>
                  <span>Duration: {item.duration}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link
                  to={`/items/${item._id}`}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                >
                  View
                </Link>
                <Link
                  to={`/edit-item/${item._id}`}
                  className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}