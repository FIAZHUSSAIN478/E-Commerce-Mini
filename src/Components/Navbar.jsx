import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🛒 My E-Comerace Shop</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200 font-bold">Home</Link>
        <Link to="/products" className="hover:text-gray-200 font-bold">Products</Link>
        <Link to="/dashboard" className="relative hover:text-gray-200 font-bold">
          Your Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
