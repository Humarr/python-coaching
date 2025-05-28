import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CustomerInfo = {
  name: string;
  email: string;
  phone: string;
  newsletter: boolean;
};

type PaymentInfo = {
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
};

type CheckoutState = {
  cart: CartItem[];
  customer: CustomerInfo;
  payment: PaymentInfo;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo>>;
};

const defaultCustomer: CustomerInfo = {
  name: '',
  email: '',
  phone: '',
  newsletter: false,
};

const defaultPayment: PaymentInfo = {
  cardNumber: '',
  expiry: '',
  cvc: '',
  nameOnCard: '',
};

const CheckoutContext = createContext<CheckoutState | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 'python101', name: 'Python Programming Mastery', price: 199, quantity: 1 },
  ]);
  const [customer, setCustomer] = useState<CustomerInfo>(defaultCustomer);
  const [payment, setPayment] = useState<PaymentInfo>(defaultPayment);

  return (
    <CheckoutContext.Provider
      value={{ cart, setCart, customer, setCustomer, payment, setPayment }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
