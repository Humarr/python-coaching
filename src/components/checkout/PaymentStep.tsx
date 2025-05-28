import React, { useState } from 'react';
import { useCheckout } from '@/app/context/CheckoutContext';
import Button from '../ui/button';

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function PaymentStep({ onNext, onBack }: Props) {
  const { payment, setPayment } = useCheckout();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!payment.nameOnCard.trim()) errs.nameOnCard = 'Name on card is required';
    if (!payment.cardNumber.trim() || payment.cardNumber.length < 12)
      errs.cardNumber = 'Valid card number is required';
    if (!payment.expiry.trim() || !/^\d{2}\/\d{2}$/.test(payment.expiry))
      errs.expiry = 'Expiry date must be MM/YY';
    if (!payment.cvc.trim() || payment.cvc.length < 3)
      errs.cvc = 'CVC code is required';
    return errs;
  }

  function handleNext() {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    onNext();
  }

  return (
    <section>
      <h2 className="text-2xl mb-6">Payment Information</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
        noValidate
      >
        <div className="mb-4">
          <label htmlFor="nameOnCard" className="block mb-1 font-semibold">
            Name on Card
          </label>
          <input
            id="nameOnCard"
            type="text"
            className={`w-full p-2 border rounded ${
              errors.nameOnCard ? 'border-red-500' : 'border-gray-300'
            }`}
            value={payment.nameOnCard}
            onChange={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
          />
          {errors.nameOnCard && (
            <p className="text-red-500 text-sm mt-1">{errors.nameOnCard}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-1 font-semibold">
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            maxLength={16}
            className={`w-full p-2 border rounded ${
              errors.cardNumber ? 'border-red-500' : 'border-gray-300'
            }`}
            value={payment.cardNumber}
            onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label htmlFor="expiry" className="block mb-1 font-semibold">
              Expiry (MM/YY)
            </label>
            <input
              id="expiry"
              type="text"
              maxLength={5}
              placeholder="MM/YY"
              className={`w-full p-2 border rounded ${
                errors.expiry ? 'border-red-500' : 'border-gray-300'
              }`}
              value={payment.expiry}
              onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="cvc" className="block mb-1 font-semibold">
              CVC
            </label>
            <input
              id="cvc"
              type="text"
              maxLength={4}
              className={`w-full p-2 border rounded ${
                errors.cvc ? 'border-red-500' : 'border-gray-300'
              }`}
              value={payment.cvc}
              onChange={(e) => setPayment({ ...payment, cvc: e.target.value })}
            />
            {errors.cvc && (
              <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="secondary" type="button" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Review Order</Button>
        </div>
      </form>
    </section>
  );
}
