import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      title: "Premium Quality",
      desc: "Every product is crafted to perfection and built to last.",
      icon: "💎",
    },
    {
      title: "Fast Delivery",
      desc: "Get your favorite gadgets delivered in record time.",
      icon: "⚡",
    },
    {
      title: "24/7 Support",
      desc: "We’re here to help you anytime, anywhere.",
      icon: "💬",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Smart Watch X",
      price: "PKR 3000",
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "PKR 5000",
      img: "https://plus.unsplash.com/premium_photo-1710962439403-a35fbc684b15?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Gaming Mouse Pro",
      price: "PKR 800",
      img: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Bluetooth Speaker Mini",
      price: "PKR 4000",
      img: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <section className="relative flex flex-col items-center justify-center text-center h-[90vh] bg-gradient-to from-blue-100 via-gray-100 to-blue-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621406384199-f9ee619e3810?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"

          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 drop-shadow-sm">
            Upgrade Your Tech Style ⚙️
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8 mx-auto">
            Discover premium gadgets and accessories designed for your modern lifestyle.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Trending  */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Trending Now 🔥
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.price}</p>
              <Link
                to={`/product/${item.id}`}
                className="inline-block mt-3 bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
