import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(StoreContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`px-4 top-2 z-50 mb-4 shadow-sm ${
        user ? "bg-orange-50" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center h-full">
          <img src={assets.logo} alt="Logo" className="h-40 object-contain" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-orange-500 transition">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </ul>

        {/* Desktop Sign In / Dashboard + Logout */}
        <div className="hidden md:block">
          {user ? (
            <div className="flex gap-2">
              <Link
                to="/dashboard"
                className="bg-black px-6 py-2 rounded-full text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={logoutUser}
                className="bg-orange-500 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/register"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/blogs" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>

            {user ? (
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  to="/dashboard"
                  onClick={toggleMenu}
                  className="bg-black px-6 py-2 rounded-full text-white text-center"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logoutUser();
                    toggleMenu();
                  }}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/register"
                onClick={toggleMenu}
                className="bg-orange-500 text-white px-4 py-2 rounded-full w-fit mt-2 hover:bg-orange-600 transition"
              >
                Sign In
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
