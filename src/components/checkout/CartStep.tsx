import React from 'react';
import { useCheckout } from '@/app/context/CheckoutContext';
import Button from '../ui/button';

type Props = {
    onNext: () => void;
};

export default function CartStep({ onNext }: Props) {
    const { cart } = useCheckout();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <section>
            <h2 className="text-2xl mb-6 text-text">Your Cart</h2>
            <ul className="mb-6 divide-y divide-gray-300">
                {cart.map((item) => (
                    <li key={item.id} className="py-4 flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-text">{item.name}</p>
                            <p className="text-text">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-text">${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <div className="text-right font-bold text-xl mb-8">
                Total: ${total.toFixed(2)}
            </div>
            <Button onClick={onNext}>Proceed to Details</Button>
        </section>
    );
}
