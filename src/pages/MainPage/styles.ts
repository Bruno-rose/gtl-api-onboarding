export const styles = {
  container: "min-h-screen bg-gray-50 flex flex-col",
  mainContent: "flex-grow flex flex-col p-6",
  contentArea: "flex-grow flex flex-col items-center justify-center max-w-6xl mx-auto w-full",
  gridLayout: "w-full grid grid-cols-1 md:grid-cols-2 gap-6",
  navigation: "flex justify-between mt-8 max-w-6xl mx-auto w-full",
  backButton: (disabled: boolean) =>
    `px-4 py-2 rounded-md flex items-center ${
      disabled
        ? "text-gray-400 cursor-not-allowed"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }`,
  nextButton: (disabled: boolean) =>
    `px-4 py-2 rounded-md flex items-center ${
      disabled
        ? "text-gray-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white"
    }`,
  historyContainer: "border-t border-gray-200 bg-white",
  historyWrapper: "max-w-6xl mx-auto w-full",
};