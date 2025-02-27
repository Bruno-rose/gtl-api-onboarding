export const styles = {
  container: "max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8",
  header: {
    wrapper: "text-center mb-8",
    title: "text-3xl font-bold text-gray-900 mb-2",
    subtitle: "text-xl text-gray-600"
  },
  content: {
    wrapper: "mb-8",
    text: "text-gray-700 mb-4",
    section: {
      title: "text-xl font-semibold text-gray-800 mb-3",
      list: "list-disc pl-6 mb-4 text-gray-700"
    }
  },
  operations: {
    container: "border-t border-gray-200 pt-8",
    title: "text-2xl font-bold text-gray-900 mb-6",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-6",
    card: {
      wrapper: "bg-blue-50 p-6 rounded-lg border border-blue-100",
      header: {
        wrapper: "flex items-center mb-4",
        number: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3",
        title: "text-lg font-semibold text-gray-800"
      },
      content: {
        wrapper: "flex items-start mb-3",
        icon: "w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0",
        text: "text-gray-700",
        code: "bg-gray-100 px-1 py-0.5 rounded"
      }
    }
  },
  info: {
    container: "border-t border-gray-200 pt-8 mt-8",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
    section: {
      title: "text-xl font-semibold text-gray-800 mb-3",
      text: "text-gray-700 mb-2",
      code: "bg-gray-100 p-3 rounded-md"
    }
  }
}; 