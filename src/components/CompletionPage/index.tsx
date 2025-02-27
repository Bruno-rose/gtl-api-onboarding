import React from "react";
import {
  CheckCircle,
  Code,
  Database,
  Search,
  ExternalLink,
} from "lucide-react";

interface CompletionPageProps {
  historyCount: number;
}

const CompletionPage: React.FC<CompletionPageProps> = ({ historyCount }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Onboarding Complete!
        </h1>
        <p className="text-xl text-gray-600">
          You're all set to use Greptile API
        </p>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 mb-6">
          You've successfully completed the Greptile onboarding process.
          {historyCount > 0 ? (
            <span>
              {" "}
              You've made{" "}
              <span className="font-semibold text-blue-600">
                {historyCount}
              </span>{" "}
              test {historyCount === 1 ? "request" : "requests"} during this
              session.
            </span>
          ) : (
            <span>
              {" "}
              You haven't made any test requests yet, but you can always go back
              and try the endpoints.
            </span>
          )}
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What's Next?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                <Database className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Index your repositories
                </p>
                <p className="text-gray-600">
                  Start by indexing your most important repositories to make
                  them searchable.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                <Code className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Integrate with your tools
                </p>
                <p className="text-gray-600">
                  Connect Greptile with Slack, GitHub, or your custom
                  applications.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Explore advanced queries
                </p>
                <p className="text-gray-600">
                  Try complex natural language queries to get the most out of
                  your codebase.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" className="block group">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-150">
              <div className="flex items-center mb-3">
                <div className="mr-3 bg-purple-100 p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  Documentation
                </h3>
              </div>
              <p className="text-gray-600">
                Comprehensive guides and API reference for all Greptile
                features.
              </p>
              <div className="mt-4 flex items-center text-blue-600">
                <span className="text-sm font-medium">Read the docs</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </div>
          </a>

          <a href="#" className="block group">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-150">
              <div className="flex items-center mb-3">
                <div className="mr-3 bg-green-100 p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  Community
                </h3>
              </div>
              <p className="text-gray-600">
                Join our Discord community to get help and share your
                experiences.
              </p>
              <div className="mt-4 flex items-center text-blue-600">
                <span className="text-sm font-medium">Join community</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Need help?
              </h3>
              <p className="mt-1 text-gray-600">
                Our support team is available to help you get the most out of
                Greptile.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <span className="text-sm font-medium">Contact support</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionPage;
