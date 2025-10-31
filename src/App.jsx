import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
