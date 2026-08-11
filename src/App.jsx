import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SocialMedia from "./pages/SocialMedia";
import MobileSafety from "./pages/MobileSafety";
import Scams from "./pages/Scams";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/mobile-safety" element={<MobileSafety />} />
        <Route path="/scams" element={<Scams />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;