import React, { useContext, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StoreContext } from '../store/StoreProvider';
import { formatCurrency } from '../config/currency';

const STATUS_STEPS = ['Pending', 'Paid', 'Fulfilled', 'Delivered'];

const OrderDetailPage = () => {
  const { id } = useParams();
  const { orders } = useContext(StoreContext);
  const order = useMemo(() => orders.find((o) => String(o.id) === String(id)), [orders, id]);

  if (!order) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Order {id}</h2>
        <div className="bg-white rounded-md p-6 shadow">
          <p className="text-gray-700 mb-4">We couldn't find this order.</p>
          <Link className="text-primary" to="/catalog">Go back to catalog</Link>
        </div>
      </main>
    );
  }

  const activeIndex = Math.max(STATUS_STEPS.indexOf(order.status), 0);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Order {order.id}</h2>

      <div className="bg-white rounded-md p-6 shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Status</h3>
        <ol className="flex items-center gap-3 text-sm" aria-label="Order Status">
          {STATUS_STEPS.map((s, idx) => (
            <li key={s} className={`${idx <= activeIndex ? 'text-green-700 font-semibold' : 'text-gray-400'}`}>
              {s}{idx < STATUS_STEPS.length - 1 && ' ›'}
            </li>
          ))}
        </ol>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-md p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Items</h3>
          <ul className="divide-y">
            {order.items.map(({ id: itemId, book, quantity }) => (
              <li key={itemId} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={book.image} alt={`${book.title} by ${book.author}`} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <div className="font-medium">{book.title}</div>
                    <div className="text-sm text-gray-600">Qty {quantity}</div>
                  </div>
                </div>
                <div className="font-semibold">{formatCurrency(book.price * quantity)}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-md p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(order.totals.subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{formatCurrency(order.totals.shippingFee)}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{formatCurrency(order.totals.tax)}</span></div>
            <div className="flex justify-between font-semibold pt-2 border-t mt-2"><span>Total</span><span>{formatCurrency(order.totals.total)}</span></div>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-2">Shipping</h3>
          <div className="text-sm text-gray-700">
            <div>{order.shipping.fullName}</div>
            <div>{order.shipping.address}</div>
            <div>{order.shipping.city}, {order.shipping.postalCode}</div>
            <div>{order.shipping.country}</div>
            <div className="mt-2 text-gray-600">{order.shipping.email}</div>
          </div>

          <div className="text-xs text-gray-500 mt-6">Placed {new Date(order.createdAt).toLocaleString()}</div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetailPage;


