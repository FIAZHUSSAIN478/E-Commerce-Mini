import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Products() {
  const { addToCart } = useCart();

  // Default products
  const defaultProducts = [
    {
      id: "1",
      name: "Smart Watch",
      price: 5000,
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
    },
    {
      id: "2",
      name: "Wireless Headphones",
      price: 3000,
      img: "https://plus.unsplash.com/premium_photo-1710962439403-a35fbc684b15?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: "3",
      name: "Gaming Mouse",
      price: 500,
      img: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    },
  ];

  // Load products from localStorage or use default
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  const [newProduct, setNewProduct] = useState({ name: "", price: "", img: "" });

  // Save products in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Add new product
  const handleAddNewProduct = (e) => {
    e.preventDefault();

    // Prevent duplicate by name
    const duplicate = products.find(
      (p) => p.name.toLowerCase() === newProduct.name.toLowerCase()
    );
    if (duplicate) {
      alert("This product already exists!");
      return;
    }

    const product = {
      id: Math.random().toString(36).substr(2, 9),
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img || "https://via.placeholder.com/300x200?text=No+Image",
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", img: "" });
  };

  // Remove product
  const handleRemoveProduct = (id) => {
    const confirmed = window.confirm("Are you sure you want to remove this product?");
    if (!confirmed) return;
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="mx-auto mb-3 rounded-lg h-48 w-full object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/300x200?text=No+Image")
              }
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">PKR {product.price}</p>
            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <Link
                to={`/product/${product.id}`}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                View Detail
              </Link>
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Product Form */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Add New Product</h3>
        <form onSubmit={handleAddNewProduct} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border px-2 py-1 rounded"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="border px-2 py-1 rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={newProduct.img}
            onChange={(e) =>
              setNewProduct({ ...newProduct, img: e.target.value })
            }
            className="border px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Products;
