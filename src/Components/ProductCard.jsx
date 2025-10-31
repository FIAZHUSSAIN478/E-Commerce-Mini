export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">${product.price}</p>

        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onViewDetails(product)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
