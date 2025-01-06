import React from 'react';

const FallbackComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="text-center">
                <svg
                    className="animate-spin h-16 w-16 text-indigo-500 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
                    <path
                        className="opacity-75"
                        fill="none"
                        strokeWidth="4"
                        d="M4 12a8 8 0 1 1 16 0 8 8 0 1 1-16 0z"
                    ></path>
                </svg>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700">Loading...</h2>

            </div>
        </div>
    );
};

export default FallbackComponent;
