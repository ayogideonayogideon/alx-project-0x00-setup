import Card from "@/components/Card";
import Button from "../components/Button";
import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold">Welcome to ALX Project 🚀</h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Buttons */}
      <div className="w-full">
        <h2 className="mb-4 text-2xl font-bold text-white">✨ Buttons Showcase</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Size Variants */}
          <Button title="Small" className="text-sm bg-blue-600 rounded-md" />
          <Button title="Medium" className="text-base bg-green-600 rounded-md" />
          <Button title="Large" className="text-lg bg-red-600 rounded-md" />

          {/* Shape Variants */}
          <Button title="Rounded-sm" className="bg-indigo-600 rounded-sm" />
          <Button title="Rounded-md" className="bg-pink-600 rounded-md" />
          <Button title="Rounded-full" className="px-6 bg-yellow-600 rounded-full" />
        </div>
      </div>

      {/* Link to Home */}
      <Link href="/" passHref legacyBehavior>
        <a className="px-6 py-2 font-semibold text-indigo-600 transition bg-white rounded hover:bg-gray-100">
          Go to Home
        </a>
      </Link>
    </main>
  );
};

export default LandingPage;