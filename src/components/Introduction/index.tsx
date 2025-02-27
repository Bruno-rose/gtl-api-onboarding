import { Code, Search, Database } from "lucide-react";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Greptile
        </h1>
        <p className="text-xl text-gray-600">
          AI expert on any codebase, as an API
        </p>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Greptile indexes large repos and then answers hard questions about
          them in natural language. Think of it as an AI expert on your
          codebase, available as an API.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Example queries:
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>"How does auth work in this codebase?"</li>
          <li>"Generate a comment for this PR with codebase context"</li>
          <li>"How would I add pagination to the /retrieve endpoint?"</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          You can use the API in many ways:
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Integrate with Slack to answer codebase questions.</li>
          <li>
            Integrate with Sentry to enrich alerts with codebase context,
            diagnoses, and resolution steps.
          </li>
          <li>
            Integrate with GitHub to review PRs and comment on new issues.
          </li>
        </ul>

        <p className="text-gray-700">
          We offer a growing list of first-party integrations, or you can use
          the API to build your own.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Order of Operations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Index repo(s)
              </h3>
            </div>
            <div className="flex items-start mb-3">
              <Database className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Use{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">
                  POST /repositories
                </code>{" "}
                to submit a repo to get indexed.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Query repos
              </h3>
            </div>
            <div className="flex items-start mb-3">
              <Code className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Use{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">
                  POST /query
                </code>{" "}
                to query the repo or repos in natural language and get back an
                answer and a list of relevant files, functions, classes etc.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Search repos
              </h3>
            </div>
            <div className="flex items-start mb-3">
              <Search className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Optionally, use{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">
                  POST /search
                </code>{" "}
                to search the repo or repos in natural language and get back
                just the list of relevant files, functions, classes etc., not
                the answer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Base URL
            </h3>
            <p className="text-gray-700 mb-2">
              The base URL for all API requests is:
            </p>
            <div className="bg-gray-100 p-3 rounded-md">
              <code>https://api.greptile.com/v2/</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Authentication
            </h3>
            <p className="text-gray-700 mb-2">Two tokens are required:</p>
            <ul className="space-y-3">
              <li className="bg-gray-100 p-3 rounded-md">
                <p className="font-semibold">Greptile API key:</p>
                <p className="text-sm text-gray-700">
                  Include the API key in the request header:{" "}
                  <code>Authorization: Bearer &lt;API_KEY&gt;</code>
                </p>
              </li>
              <li className="bg-gray-100 p-3 rounded-md">
                <p className="font-semibold">GitHub Token:</p>
                <p className="text-sm text-gray-700">
                  Include this header with your GitHub/Gitlab access token:{" "}
                  <code>X-GitHub-Token: &lt;GITHUB_TOKEN&gt;</code>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
