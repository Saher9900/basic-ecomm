import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* logo */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">MyLogo</h2>
          <p className="text-sm">
            We build modern web applications with clean design and great user
            experience.
          </p>
        </div>
        {/* quick links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">Products</Link>
            </li>
          </ul>
        </div>
           {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +20 123 456 7890</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
      {/* </div> */}
      
    </footer>
  );
}

export default Footer;
