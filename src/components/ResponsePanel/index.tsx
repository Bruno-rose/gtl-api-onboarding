import React from "react";

interface ResponsePanelProps {
  response: string;
}

const ResponsePanel: React.FC<ResponsePanelProps> = ({ response }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Response</h2>

      {response ? (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 h-[calc(100%-4rem)] overflow-auto">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
            {response}
          </pre>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] text-center text-gray-500">
          <svg
            className="w-16 h-16 mb-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className="text-lg font-medium">No response yet</p>
          <p className="mt-1">Submit a query to see the response here</p>
        </div>
      )}
    </div>
  );
};

export default ResponsePanel;
