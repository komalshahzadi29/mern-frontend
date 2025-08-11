import { Link } from "react-router-dom";

export default function ItemListView({ items, onDelete }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-10">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        📦 All Items
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No items available.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col justify-between border border-gray-100"
            >
              <div>
                <h3 className="text-2xl font-bold text-indigo-700">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                {item.price && (
                  <p className="mt-2 text-green-600 font-semibold text-lg">{item.price}</p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={`/items/${item._id}`}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md"
                >
                  View
                </Link>
                <Link
                  to={`/edit-item/${item._id}`}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition shadow-md"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
