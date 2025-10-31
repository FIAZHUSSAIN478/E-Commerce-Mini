import { useCart } from "../context/CartContext";

function Dashboard() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty 🛒</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">PKR {item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <h3 className="text-xl font-semibold">
              Total: <span className="text-blue-700">PKR {totalPrice}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
