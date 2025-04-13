"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: { digest?: string } & Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-50 p-4 dark:bg-neutral-950">
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

        <h2 className="mb-3 text-center text-2xl font-bold tracking-tight">Something went wrong!</h2>

        <p className="mb-6 text-center text-neutral-600 dark:text-neutral-400">
          An unexpected error occurred. We&#39;ve logged the issue and are working to fix it.
        </p>

        {error.digest && (
          <p className="mb-6 overflow-auto rounded-md bg-neutral-50 p-3 text-center font-mono text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
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
            Try again
          </button>

          <Link
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-black dark:hover:bg-neutral-900 dark:focus-visible:ring-neutral-300"
            href="/">
            <svg
              className="lucide lucide-arrow-left-icon lucide-arrow-left mr-2 size-4"
              xmlns="http://www.w3.org/2000/svg"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              height="24"
              fill="none"
              width="24">
              <path d="m12 19-7-7 7-7M19 12H5"></path>
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
