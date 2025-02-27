import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Search,
} from "lucide-react";
import Introduction from "../../components/Introduction";
import QueryPanel from "../../components/QueryPanel";
import ResponsePanel from "../../components/ResponsePanel";
import HistoryPanel from "../../components/HistoryPanel";
import CompletionPage from "../../components/CompletionPage";
import { Endpoint, EndpointInfo, HistoryItem } from "../../types";
import { styles } from "./styles";

export const endpoints: EndpointInfo[] = [
  {
    name: "repositories",
    title: "Index Repository",
    description: "Submit a repository to be indexed by Greptile.",
    icon: <Database className="w-5 h-5" />,
    fields: [
      {
        name: "repoUrl",
        label: "Repository URL",
        type: "text",
        placeholder: "https://github.com/username/repo",
        required: true,
      },
      {
        name: "branch",
        label: "Branch",
        type: "text",
        placeholder: "main",
        required: false,
      },
    ],
  },
  {
    name: "query",
    title: "Query Repository",
    description: "Ask questions about your codebase in natural language.",
    icon: <Code className="w-5 h-5" />,
    fields: [
      {
        name: "repoId",
        label: "Repository ID",
        type: "text",
        placeholder: "repo_12345",
        required: true,
      },
      {
        name: "query",
        label: "Query",
        type: "textarea",
        placeholder: "How does authentication work in this codebase?",
        required: true,
      },
    ],
  },
  {
    name: "search",
    title: "Search Repository",
    description:
      "Search for relevant files, functions, and classes in your codebase.",
    icon: <Search className="w-5 h-5" />,
    fields: [
      {
        name: "repoId",
        label: "Repository ID",
        type: "text",
        placeholder: "repo_12345",
        required: true,
      },
      {
        name: "searchTerm",
        label: "Search Term",
        type: "textarea",
        placeholder: "Find all files related to user authentication",
        required: true,
      },
    ],
  },
];

function MainPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentRequest, setCurrentRequest] = useState<Record<string, string>>(
    {}
  );
  const [currentResponse, setCurrentResponse] = useState<string>("");

  const totalSteps = endpoints.length + 2; // Introduction + endpoints + completion

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (endpoint: Endpoint, data: Record<string, string>) => {
    // Simulate API call
    const mockResponse = `Mock response for ${endpoint} endpoint with data: ${JSON.stringify(
      data
    )}`;

    // Update current response
    setCurrentResponse(mockResponse);

    // Add to history
    const historyItem: HistoryItem = {
      id: Date.now().toString(),
      endpoint,
      request: data,
      response: mockResponse,
      timestamp: new Date(),
    };

    setHistory([historyItem, ...history]);
  };

  const handleHistoryItemClick = (item: HistoryItem) => {
    // Find the endpoint index
    const endpointIndex = endpoints.findIndex((e) => e.name === item.endpoint);
    if (endpointIndex !== -1) {
      setCurrentStep(endpointIndex + 1); // +1 because step 0 is introduction
      setCurrentRequest(item.request);
      setCurrentResponse(item.response);
    }
  };

  const renderContent = () => {
    if (currentStep === 0) {
      return <Introduction />;
    } else if (currentStep === totalSteps - 1) {
      return <CompletionPage historyCount={history.length} />;
    } else {
      return (
        <div className={styles.gridLayout}>
          <QueryPanel
            endpoint={endpoints[currentStep - 1]}
            initialValues={currentRequest}
            onSubmit={(data) =>
              handleSubmit(endpoints[currentStep - 1].name, data)
            }
          />
          <ResponsePanel response={currentResponse} />
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      {/* Main content */}
      <div className={styles.mainContent}>
        {/* Content area */}
        <div className={styles.contentArea}>{renderContent()}</div>

        {/* Navigation buttons */}
        <div className={styles.navigation}>
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={styles.backButton(currentStep === 0)}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps - 1}
            className={styles.nextButton(currentStep === totalSteps - 1)}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* History panel */}
      <div className={styles.historyContainer}>
        <div className={styles.historyWrapper}>
          <HistoryPanel
            history={history}
            onItemClick={handleHistoryItemClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
