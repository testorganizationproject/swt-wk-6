import React, { useMemo, useState, useContext } from 'react';
import BookList from '../components/BookList';
import { books } from '../data/books';
import { StoreContext } from '../store/StoreProvider';

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useContext(StoreContext);

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;
    const query = searchQuery.toLowerCase();
    return books.filter((book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handlePurchase = async (book) => {
    // For now, add to cart instead of immediate Paystack
    addToCart(book, 1);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Collection</h2>
            <p className="text-gray-600">Discover amazing books from renowned authors</p>
          </div>
          <div className="w-full sm:w-80">
            <label htmlFor="search" className="sr-only">Search books</label>
            <input
              id="search"
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>
        </div>
      </div>
      <BookList books={filteredBooks} onPurchase={handlePurchase} />
    </main>
  );
};

export default CatalogPage;


