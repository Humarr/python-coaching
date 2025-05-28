import React from 'react';
import Button from '../ui/button';
import Link from 'next/link'

type Props = {
    onReset: () => void;
};

export default function ThankYouStep({ onReset }: Props) {
    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Thank You for Your Purchase!</h2>
            <p className="mb-4">
                Your payment was successful. You will receive an email with your course access details shortly.
            </p>
            <p className="mb-8">
                Start learning Python today and unlock your coding potential!
            </p>
            <Link href="/">
                <Button onClick={onReset}>Back to Home</Button>
            </Link>
        </section>
    );
}
