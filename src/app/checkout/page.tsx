'use client';
import React, { useState } from 'react';
import { CheckoutProvider } from '../context/CheckoutContext';
import CartStep from '@/components/checkout/CartStep';
import CustomerStep from '@/components/checkout/CustomerStep';
import PaymentStep from '@/components/checkout/PaymentStep';
import ReviewStep from '@/components/checkout/ReviewStep';
import ThankYouStep from '@/components/checkout/ThankYouStep';

const steps = [
    'Cart',
    'Details',
    'Payment',
    'Review',
    'Done',
];

export default function CheckoutPage() {
    const [step, setStep] = useState(0);

    function nextStep() {
        setStep((s) => Math.min(s + 1, steps.length - 1));
    }
    function prevStep() {
        setStep((s) => Math.max(s - 1, 0));
    }
    function reset() {
        setStep(0);
    }

    return (
        <CheckoutProvider>
            <main className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mt-12">
                <nav className="flex justify-between mb-8 text-sm font-medium text-gray-600">
                    {steps.map((label, i) => (
                        <div
                            key={label}
                            className={`flex-1 text-center border-b-2 pb-2 ${i === step
                                    ? 'border-primary text-primary font-bold'
                                    : 'border-gray-300'
                                }`}
                        >
                            {label}
                        </div>
                    ))}
                </nav>

                {step === 0 && <CartStep onNext={nextStep} />}
                {step === 1 && <CustomerStep onNext={nextStep} onBack={prevStep} />}
                {step === 2 && <PaymentStep onNext={nextStep} onBack={prevStep} />}
                {step === 3 && <ReviewStep onNext={nextStep} onBack={prevStep} />}
                {step === 4 && <ThankYouStep onReset={reset} />}
            </main>
        </CheckoutProvider>
    );
}
