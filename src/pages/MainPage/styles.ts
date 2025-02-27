export const styles = {
  container: "min-h-screen bg-[#0a0c0d] flex flex-col",
  mainContent: "flex-grow flex flex-col p-8",
  contentArea: "flex-grow flex flex-col items-center justify-center max-w-7xl mx-auto w-full",
  gridLayout: "w-full grid grid-cols-1 md:grid-cols-2 gap-8",
  navigation: "flex justify-between mt-12 max-w-7xl mx-auto w-full",
  backButton: (disabled: boolean) =>
    `px-6 py-3 rounded-xl flex items-center space-x-2 transition-all ${
      disabled
        ? "bg-[#0a0c0d] text-gray-600 cursor-not-allowed"
        : "bg-[#0a0c0d] border border-[#0d9373] text-white hover:bg-[#0d9373] transition-colors"
    }`,
  nextButton: (disabled: boolean) =>
    `px-6 py-3 rounded-xl flex items-center space-x-2 transition-all ${
      disabled
        ? "bg-[#0a0c0d] text-gray-600 cursor-not-allowed"
        : "bg-[#0d9373] hover:bg-[#07c983] text-white transition-colors"
    }`,
  historyContainer: "border-t border-[#0d9373]/20 bg-[#0a0c0d]",
  historyWrapper: "max-w-7xl mx-auto w-full",
};