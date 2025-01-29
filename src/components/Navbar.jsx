import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide hover:scale-105 transform transition duration-300">
          Online Library
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-medium hidden md:flex">
          <Link
            className="relative px-4 py-2 text-white hover:text-blue-200 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-blue-300 hover:before:w-full before:transition-all before:duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="relative px-4 py-2 text-white hover:text-blue-200 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-blue-300 hover:before:w-full before:transition-all before:duration-300"
            to="/browse-books"
          >
            Browse Books
          </Link>
          <Link
            className="relative px-4 py-2 text-white hover:text-blue-200 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-blue-300 hover:before:w-full before:transition-all before:duration-300"
            to="/add-book"
          >
            Add Book
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white hover:text-blue-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
