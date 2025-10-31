// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">TechStore</h2>
          <p className="text-gray-600 text-sm">
            Explore premium gadgets and accessories that elevate your everyday lifestyle.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/products" className="hover:text-blue-600">Products</a></li>
            <li><a href="/cart" className="hover:text-blue-600">Cart</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-600">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} TechStore. Built with ❤️ by Fiaz Hussain.
      </div>
    </footer>
  );
}

export default Footer;
