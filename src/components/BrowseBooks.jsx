import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBooks } from "../redux/booksSlice";
import { Link } from "react-router-dom";

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { items: books, status } = useSelector((state) => state.books);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading") {
    return <p>Loading books...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load books. Please try again later.</p>;
  }

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Browse Books
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or subtitle"
          className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.isbn13}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{book.subtitle}</p>
                <Link
                  to={`/book/${book.isbn13}`}
                  className="block mt-4 bg-indigo-600 text-white text-center font-medium py-2 px-4 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-center col-span-full">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
