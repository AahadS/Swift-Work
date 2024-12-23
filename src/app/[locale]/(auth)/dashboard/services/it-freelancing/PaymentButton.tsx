'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

type PaymentButtonProps = {
  label: string;
  amount: number;
  description: string;
};

export default function PaymentButton({ label, amount, description }: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/payments/wise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Payment initiated successfully!');
        // You might want to redirect to a success page
        // router.push('/payment/success');
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="hover:bg-primary-dark w-full rounded bg-primary px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      onClick={handlePayment}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : label}
    </button>
  );
}
