import { initializePaystackPayment, verifyPayment } from '../utils/paystack';
import { APP_CURRENCY } from '../config/currency';

export const startPayment = async ({ items, email, currency = APP_CURRENCY, onSuccess, onCancel }) => {
  // For now, pay for first item to keep compatibility with existing util
  const book = items?.[0]?.book || items?.[0] || null;
  if (!book) throw new Error('No items to pay for');

  return initializePaystackPayment(
    book,
    email,
    async (response, purchasedBook) => {
      const verification = await verifyPayment(response.reference);
      onSuccess && onSuccess({ response, verification, purchasedBook });
    },
    onCancel,
    { currency }
  );
};


