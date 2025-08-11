import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="!bg-blue-600 p-4 shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg text-white hover:text-gray-200">
          Home
        </Link>
        <div className="space-x-6">
          <Link to="/items" className="text-white hover:text-gray-200 transition duration-200">
            View Items
          </Link>
          <Link to="/add-item" className="text-white hover:text-gray-200 transition duration-200">
            Add Item
          </Link>
        </div>
      </div>
    </nav>
  );
}
