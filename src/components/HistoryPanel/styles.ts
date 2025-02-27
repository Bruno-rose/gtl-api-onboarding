export const styles = {
  container: "border-t border-gray-200",
  header: {
    wrapper: "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50",
    title: {
      wrapper: "flex items-center",
      text: "font-medium text-gray-800",
      count: "ml-2 bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full"
    },
    button: "text-gray-500 hover:text-gray-700",
    icon: "w-5 h-5"
  },
  content: {
    wrapper: "max-h-64 overflow-y-auto",
    empty: "p-6 text-center text-gray-500",
    list: "divide-y divide-gray-200",
    item: {
      wrapper: "p-4 hover:bg-gray-50 cursor-pointer",
      content: {
        wrapper: "flex items-start",
        iconWrapper: "mr-3 mt-0.5 bg-blue-100 p-1.5 rounded-full text-blue-600",
        icon: "w-4 h-4",
        main: {
          wrapper: "flex-1 min-w-0",
          header: {
            wrapper: "flex items-center justify-between",
            title: "text-sm font-medium text-gray-900 truncate capitalize",
            time: "text-xs text-gray-500"
          },
          details: "mt-1 text-sm text-gray-600 truncate"
        }
      }
    }
  }
}; 