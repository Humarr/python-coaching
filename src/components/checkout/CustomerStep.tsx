import React, { useState } from 'react';
import { useCheckout } from '@/app/context/CheckoutContext';
import Button from '../ui/button';

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function CustomerStep({ onNext, onBack }: Props) {
  const { customer, setCustomer } = useCheckout();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!customer.name.trim()) errs.name = 'Name is required';
    if (!customer.email.trim() || !customer.email.includes('@'))
      errs.email = 'Valid email is required';
    if (!customer.phone.trim()) errs.phone = 'Phone is required';
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
      <h2 className="text-2xl mb-6">Your Details</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
        noValidate
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full p-2 border rounded ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full p-2 border rounded ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 font-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full p-2 border rounded ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            value={customer.phone}
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={customer.newsletter}
              onChange={(e) =>
                setCustomer({ ...customer, newsletter: e.target.checked })
              }
              className="mr-2"
            />
            Subscribe to newsletter
          </label>
        </div>
        <div className="flex justify-between">
          <Button variant="secondary" type="button" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Proceed to Payment</Button>
        </div>
      </form>
    </section>
  );
}
