"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  const [success, setSuccess] = useState(false);

  return (
    <button
      disabled={pending || success}
      className={`w-full btn flex items-center justify-center ${
        success
          ? "bg-green-500 text-white"
          : pending
          ? "bg-gray-400 text-gray-600"
          : "text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white"
      }`}
      onClick={() => setTimeout(() => setSuccess(true), 1000)}
    >
      {success ? (
        "Joined Successfully!"
      ) : pending ? (
        <>
          <svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Submitting...
        </>
      ) : (
        "Join The Waitlist"
      )}
    </button>
  );
};
