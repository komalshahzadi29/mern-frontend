export default function ItemDetailsView({ item }) {
  const sampleItem = {
    _id: "1",
    name: "Wireless Mouse",
    description:
      "An ergonomic wireless mouse with adjustable DPI settings, silent clicks, and a sleek design. Perfect for both work and gaming.",
    price: "$25",
    features: [
      "2.4GHz Wireless Connectivity",
      "Adjustable DPI (800/1200/1600)",
      "Silent Click Buttons",
      "Battery life up to 12 months",
    ],
    inStock: true,
  };

  const displayItem = item?.name ? item : sampleItem;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">
          {displayItem.name}
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {displayItem.description}
        </p>

        {/* Price */}
        {displayItem.price && (
          <p className="text-green-600 font-bold text-2xl mb-6">
            {displayItem.price}
          </p>
        )}

        {/* Features List */}
        {displayItem.features && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Features:
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {displayItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Stock Status */}
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-medium shadow-md ${
            displayItem.inStock
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {displayItem.inStock ? "✅ In Stock" : "❌ Out of Stock"}
        </span>

        {/* Item ID */}
        <p className="mt-6 text-sm text-gray-500">
          Item ID: {displayItem._id}
        </p>
      </div>
    </div>
  );
}
