import React from 'react';
import { useCheckout } from '@/app/context/CheckoutContext';
import Button from '../ui/button';

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function ReviewStep({ onNext, onBack }: Props) {
  const { cart, customer, payment } = useCheckout();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section>
      <h2 className="text-2xl mb-6">Review Your Order</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Products</h3>
        <ul className="divide-y divide-gray-300">
          {cart.map((item) => (
            <li key={item.id} className="py-2 flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-right font-bold text-lg mt-2">Total: ${total.toFixed(2)}</div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Customer Info</h3>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Newsletter:</strong> {customer.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-2">Payment Info</h3>
        <p><strong>Name on Card:</strong> {payment.nameOnCard}</p>
        <p><strong>Card Number:</strong> **** **** **** {payment.cardNumber.slice(-4)}</p>
        <p><strong>Expiry:</strong> {payment.expiry}</p>
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Confirm and Pay</Button>
      </div>
    </section>
  );
}
