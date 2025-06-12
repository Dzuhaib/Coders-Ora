// app/not-found.tsx
'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import notFoundAnimation from '@/public/lotties/not-found.json';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <div className="w-full max-w-md mx-auto">
        <Lottie animationData={notFoundAnimation} loop={true} className="w-full max-w-xs mx-auto" />
        <h1 className="text-5xl font-bold mt-4 text-white">Page Not Found</h1>
        <p className="text-gray-400 mt-3 text-lg">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
