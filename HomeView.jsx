import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center text-center p-8">
      {/* App Title */}
      <h1 className="text-6xl font-extrabold text-indigo-800 drop-shadow-lg mb-6">
        📦 Item Manager App
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed">
        Manage your items effortlessly with our modern and easy-to-use app.
        <br /> Add, view, edit, and delete items — all in one place.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          to="/items"
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
        >
          📋 View Items
        </Link>
        <Link
          to="/add-item"
          className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-green-700 transition-all transform hover:-translate-y-1"
        >
          ➕ Add Item
        </Link>
      </div>
    </div>
  );
}
