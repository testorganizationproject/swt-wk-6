import React, { useContext, useMemo, useState } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { startPayment } from '../services/CheckoutService';
import { formatCurrency } from '../config/currency';

const steps = ['Shipping', 'Review', 'Payment', 'Confirmation'];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart, orders, setOrders } = useContext(StoreContext);
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [shipping, setShipping] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
    const shippingFee = subtotal > 0 ? 4.99 : 0;
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal + shippingFee + tax).toFixed(2);
    return { subtotal, shippingFee, tax, total };
  }, [cart]);

  const validateShipping = () => {
    if (!shipping.fullName || !shipping.email || !shipping.address || !shipping.city || !shipping.country || !shipping.postalCode) {
      setError('Please fill out all required fields.');
      return false;
    }
    setError('');
    return true;
  };

  const next = async () => {
    if (activeStep === 0) {
      if (!validateShipping()) return;
      setActiveStep(1);
      return;
    }
    if (activeStep === 1) {
      setActiveStep(2);
      return;
    }
    if (activeStep === 2) {
      // Payment
      setSubmitting(true);
      setError('');
      try {
        const orderId = `${Date.now()}`;
        // Create Pending order
        const newOrder = {
          id: orderId,
          status: 'Pending',
          items: cart,
          shipping,
          totals,
          createdAt: new Date().toISOString(),
        };
        setOrders([...orders, newOrder]);

        await startPayment({
          items: cart,
          email: shipping.email,
          onSuccess: ({ response }) => {
            // Update order to Paid
            const updated = orders.concat(newOrder).map((o) => (o.id === orderId ? { ...o, status: 'Paid', gatewayRef: response.reference } : o));
            setOrders(updated);
            clearCart();
            setActiveStep(3);
            // Navigate to order details after a short delay
            setTimeout(() => navigate(`/orders/${orderId}`), 600);
          },
          onCancel: () => {
            setError('Payment was cancelled. You can retry.');
          },
        });
      } catch (e) {
        setError('Payment failed to start. Please try again.');
      } finally {
        setSubmitting(false);
      }
      return;
    }
  };

  const back = () => {
    if (activeStep > 0 && activeStep < 3) setActiveStep(activeStep - 1);
  };

  const DisabledIfEmpty = cart.length === 0 && activeStep < 3;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>

      <ol className="flex items-center gap-3 mb-6" aria-label="Checkout Steps">
        {steps.map((label, idx) => (
          <li key={label} className={`text-sm ${idx === activeStep ? 'font-bold' : 'text-gray-500'}`}>{label}{idx < steps.length - 1 && ' ›'}</li>
        ))}
      </ol>

      <div className="bg-white rounded-md p-6 shadow">
        {error && <div className="mb-4 text-red-700 bg-red-50 border border-red-200 rounded p-3" role="alert">{error}</div>}

        {activeStep === 0 && (
          <form className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); next(); }}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="fullName" required className="mt-1 w-full border rounded px-3 py-2" value={shipping.fullName} onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" required className="mt-1 w-full border rounded px-3 py-2" value={shipping.email} onChange={(e) => setShipping({ ...shipping, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input id="address" required className="mt-1 w-full border rounded px-3 py-2" value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input id="city" required className="mt-1 w-full border rounded px-3 py-2" value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input id="country" required className="mt-1 w-full border rounded px-3 py-2" value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })} />
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input id="postalCode" required className="mt-1 w-full border rounded px-3 py-2" value={shipping.postalCode} onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })} />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded" disabled={DisabledIfEmpty}>Next</button>
            </div>
          </form>
        )}

        {activeStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Review your order</h3>
            <ul className="divide-y">
              {cart.map(({ id, book, quantity }) => (
                <li key={id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{book.title}</div>
                    <div className="text-sm text-gray-600">Qty {quantity}</div>
                  </div>
                  <div className="font-semibold">{formatCurrency(book.price * quantity)}</div>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 space-y-1 text-right">
              <div>Subtotal: {formatCurrency(totals.subtotal)}</div>
              <div>Shipping: {formatCurrency(totals.shippingFee)}</div>
              <div>Tax: {formatCurrency(totals.tax)}</div>
              <div className="font-bold">Total: {formatCurrency(totals.total)}</div>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={back} className="px-4 py-2 rounded border">Back</button>
              <button onClick={next} className="bg-primary text-white px-6 py-2 rounded" disabled={DisabledIfEmpty}>Proceed to Payment</button>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment</h3>
            <p className="text-gray-700 mb-4">You will be redirected to complete your payment securely.</p>
            <div className="flex justify-between">
              <button onClick={back} className="px-4 py-2 rounded border" disabled={submitting}>Back</button>
              <button onClick={next} className="bg-primary text-white px-6 py-2 rounded" disabled={submitting || DisabledIfEmpty}>{submitting ? 'Processing...' : 'Pay Now'}</button>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div role="status" aria-live="polite">
            <h3 className="text-xl font-semibold mb-2">Payment successful</h3>
            <p className="text-gray-700">Preparing your confirmation… Redirecting to order details.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;


