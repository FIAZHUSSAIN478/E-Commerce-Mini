import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smart Watch", price: 3000, desc: "A stylish smartwatch with fitness tracking." },
  { id: 2, name: "Wireless Headphones", price: 5000, desc: "Noise-cancelling wireless headphones." },
  { id: 3, name: "Gaming Mouse", price: 4000, desc: "Ergonomic gaming mouse with RGB lights." },
  { id: 4, name: "Bluetooth Speaker", price: 7000, desc: "Portable Bluetooth speaker with deep bass." },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 className="text-center mt-10">Product not found</h2>;

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-3">PKR{product.price}</p>
      <p className="text-gray-600 max-w-xl mx-auto">{product.desc}</p>
      <Link
        to="/products"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
