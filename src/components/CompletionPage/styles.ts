export const styles = {
  container: "max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8",
  header: {
    wrapper: "text-center mb-8",
    iconWrapper: "inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4",
    icon: "w-12 h-12 text-green-600",
    title: "text-3xl font-bold text-gray-900 mb-2",
    subtitle: "text-xl text-gray-600"
  },
  description: "text-gray-700 mb-6",
  nextSteps: {
    container: "bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6",
    title: "text-xl font-semibold text-gray-800 mb-4",
    list: "space-y-4",
    item: {
      wrapper: "flex items-start",
      iconWrapper: "flex-shrink-0 mt-1 mr-3 bg-blue-100 p-1 rounded-full",
      icon: "w-5 h-5 text-blue-600",
      content: {
        title: "font-medium text-gray-800",
        description: "text-gray-600"
      }
    }
  },
  resources: {
    container: "border-t border-gray-200 pt-8",
    title: "text-2xl font-bold text-gray-900 mb-6",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
    card: {
      wrapper: "block group",
      container: "bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-150",
      header: {
        wrapper: "flex items-center mb-3",
        iconWrapper: "mr-3 bg-purple-100 p-2 rounded-full",
        icon: "w-6 h-6 text-purple-600",
        title: "text-lg font-semibold text-gray-800 group-hover:text-blue-600"
      },
      description: "text-gray-600",
      link: {
        wrapper: "mt-4 flex items-center text-blue-600",
        text: "text-sm font-medium",
        icon: "w-4 h-4 ml-1"
      }
    }
  },
  support: {
    container: "mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6",
    content: {
      wrapper: "flex items-start",
      iconWrapper: "flex-shrink-0 mt-1",
      icon: "w-6 h-6 text-blue-600",
      textWrapper: "ml-4",
      title: "text-lg font-semibold text-gray-800",
      description: "mt-1 text-gray-600",
      link: "mt-3 inline-flex items-center text-blue-600 hover:text-blue-800"
    }
  }
}; 