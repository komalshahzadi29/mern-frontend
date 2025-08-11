import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-20 text-center bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      <div className="flex flex-col items-center">
        <Package size={60} className="text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Item Manager App</h1>
        <p className="max-w-lg text-gray-600 mb-6">
          Manage your items effortlessly with our modern and easy-to-use app.
          Add, view, edit, and delete items — all in one place.
        </p>
        <div className="flex gap-4">
          <Link to="/items" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow">
            View Items
          </Link>
          <Link to="/add-item" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
            Add Item
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">📦 Easy Management</h3>
          <p className="text-gray-600">Organize and track your items with just a few clicks.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">⚡ Fast Updates</h3>
          <p className="text-gray-600">Edit or delete items instantly without page reloads.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">🔒 Secure</h3>
          <p className="text-gray-600">Your data is safe and accessible only to you.</p>
        </div>
      </div>
    </div>
  );
}
