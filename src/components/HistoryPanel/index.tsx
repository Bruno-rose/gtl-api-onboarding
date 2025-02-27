import React, { useState } from "react";
import { ChevronDown, ChevronUp, Database, Code, Search } from "lucide-react";
import { HistoryItem, Endpoint } from "../App";

interface HistoryPanelProps {
  history: HistoryItem[];
  onItemClick: (item: HistoryItem) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history,
  onItemClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getEndpointIcon = (endpoint: Endpoint) => {
    switch (endpoint) {
      case "repositories":
        return <Database className="w-4 h-4" />;
      case "query":
        return <Code className="w-4 h-4" />;
      case "search":
        return <Search className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="border-t border-gray-200">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <h3 className="font-medium text-gray-800">Request History</h3>
          <span className="ml-2 bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
            {history.length}
          </span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="max-h-64 overflow-y-auto">
          {history.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>No requests yet. Submit a query to see your history here.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {history.map((item) => (
                <li
                  key={item.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onItemClick(item)}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 bg-blue-100 p-1.5 rounded-full text-blue-600">
                      {getEndpointIcon(item.endpoint)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate capitalize">
                          {item.endpoint} Request
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatTime(item.timestamp)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 truncate">
                        {Object.entries(item.request)
                          .filter(([_, value]) => value)
                          .map(([key, value]) => `${key}: ${value}`)
                          .join(" | ")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryPanel;
