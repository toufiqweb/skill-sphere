"use client"
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">Error</h1>

        <p className="mt-4 text-gray-700 text-lg">
          Something went wrong. Please try again later.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
