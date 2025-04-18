import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 sm:px-8 md:px-16 lg:px-24 pt-12 pb-6 animate-fade-in">
      {/* Main Footer Sections */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* About */}
        <div className="w-full md:w-1/3 space-y-4">
          <h1 className="text-xl font-bold">About</h1>
          <p className="text-sm leading-relaxed">
  Welcome to Meta Blog — your go-to source for the latest insights, trending stories, and in-depth articles across a range of topics like technology, lifestyle, travel, and more. Stay informed, stay inspired.
</p>

          <p className="text-sm">📧 6GZDj@example.com</p>
          <p className="text-sm">📞 1234567890</p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 space-y-4">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <ul className="flex flex-col gap-2 text-sm">
            {["/", "/blogs", "/about", "/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="w-full md:w-1/4 space-y-4">
          <h1 className="text-xl font-bold">Categories</h1>
          <ul className="flex flex-col gap-2 text-sm">
            {["Weather", "Lifestyle", "Technology", "News"].map((cat, idx) => (
              <li
                key={idx}
                className="hover:text-orange-500 cursor-pointer transition-all duration-300"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex gap-2 items-center">
          <img src={assets.logo} alt="Logo" className="w-10 h-10" />
          <p className="font-semibold">
            Vibe <span className="text-orange-500">Verse</span>
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row gap-3 text-gray-600 text-xs sm:text-sm">
          <li className="hover:text-orange-500 cursor-pointer transition">Privacy Policy</li>
          <li className="hover:text-orange-500 cursor-pointer transition">Terms & Conditions</li>
          <li className="hover:text-orange-500 cursor-pointer transition">© 2025 Code Bless Me</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
