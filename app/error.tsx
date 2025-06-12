// app/error.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import errorAnimation from '@/public/lotties/error.json';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error('Error caught by error.tsx:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <Lottie animationData={errorAnimation} loop={true} className="w-72 mx-auto" />
        <h1 className="text-4xl font-bold text-yellow-400 mt-4">Something went wrong</h1>
        <p className="text-gray-300 mt-2">
          We're sorry! An unexpected error occurred. Please try again or go back to the homepage.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push('/')}
            className="border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-400 py-2 px-6 rounded-lg transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
