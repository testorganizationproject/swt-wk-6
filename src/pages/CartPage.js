import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../config/currency';

const CartPage = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(StoreContext);

  const subtotal = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-gray-600">Your cart is empty. <Link className="text-primary" to="/catalog">Continue shopping</Link></div>
      ) : (
        <div className="space-y-4">
          {cart.map(({ id, book, quantity }) => (
            <div key={id} className="flex items-center justify-between bg-white rounded-md p-4 shadow">
              <div className="flex items-center gap-4">
                <img src={book.image} alt={`${book.title} by ${book.author}`} className="w-16 h-16 object-cover rounded" />
                <div>
                  <div className="font-semibold">{book.title}</div>
                  <div className="text-sm text-gray-600">by {book.author}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => updateCartQuantity(id, Math.max(1, Number(e.target.value) || 1))}
                  className="w-20 border rounded px-2 py-1"
                />
                <div className="w-24 text-right font-semibold">{formatCurrency(book.price * quantity)}</div>
                <button onClick={() => removeFromCart(id)} className="text-red-600 hover:underline">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-4 mt-4">
            <div className="text-xl font-bold">Subtotal</div>
            <div className="text-xl font-bold">{formatCurrency(subtotal)}</div>
          </div>
          <div className="text-right">
            <Link to="/checkout" className="inline-block bg-primary text-white px-6 py-3 rounded-lg">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;


