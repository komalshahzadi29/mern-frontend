export default function ItemFormView({ formData, handleChange, handleSubmit, isEdit }) {
  const defaultData = {
    name: "Sample Product",
    description: "This is a sample product description.",
    price: "20",
  };

  const dataToShow = formData?.name ? formData : defaultData;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          {isEdit ? "✏️ Edit Item" : "➕ Add New Item"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={dataToShow.name}
            onChange={handleChange}
            placeholder="Item Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />

          <textarea
            name="description"
            value={dataToShow.description}
            onChange={handleChange}
            placeholder="Item Description"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          ></textarea>

          <input
            type="number"
            name="price"
            value={dataToShow.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white text-lg font-semibold rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 transition-all duration-200 shadow-md"
          >
            {isEdit ? "Update Item" : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
