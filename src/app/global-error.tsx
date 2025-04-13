"use client";

import { useEffect } from "react";
import Link from "next/link";

const GlobalError = ({ error, reset }: { error: { digest?: string } & Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-neutral-50 dark:bg-neutral-950">
        <div className="flex h-screen w-full items-center justify-center p-4">
          <div className="max-w-md rounded-lg border border-neutral-200 bg-white p-8 shadow-md dark:border-neutral-800 dark:bg-black">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-red-50 p-4 text-red-500 dark:bg-red-950/50 dark:text-red-400">
                <svg
                  className="lucide lucide-refresh-cw-icon lucide-refresh-cw size-8"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinejoin="round"
                  stroke="currentColor"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  height="24"
                  fill="none"
                  width="24">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </div>
            </div>

            <h1 className="mb-3 text-center text-3xl font-bold tracking-tight">Application Error</h1>

            <p className="mb-6 text-center text-neutral-600 dark:text-neutral-400">
              A critical error occurred in the application. We&#39;ve been notified and are working to fix the
              issue.
            </p>

            {error.digest && (
              <p className="mb-6 overflow-auto rounded-md bg-neutral-50 p-3 text-center font-mono text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
                Error ID: {error.digest}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                className="inline-flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                onClick={() => reset()}>
                <svg
                  className="lucide lucide-refresh-cw-icon lucide-refresh-cw mr-2 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinejoin="round"
                  stroke="currentColor"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  height="24"
                  fill="none"
                  width="24">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
                Reload Application
              </button>

              <Link
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-black dark:hover:bg-neutral-900 dark:focus-visible:ring-neutral-300"
                href="/">
                <svg
                  className="lucide lucide-house-icon lucide-house mr-2 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinejoin="round"
                  stroke="currentColor"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  height="24"
                  fill="none"
                  width="24">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
