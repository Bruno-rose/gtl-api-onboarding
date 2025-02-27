export const styles = {
  container: "bg-white rounded-lg shadow-md p-6 h-full",
  header: {
    wrapper: "flex items-center mb-4",
    icon: "mr-3 bg-blue-100 p-2 rounded-full",
    title: "text-xl font-semibold text-gray-800"
  },
  description: "text-gray-600 mb-6",
  form: {
    wrapper: "space-y-4",
    field: {
      wrapper: "space-y-1",
      label: {
        wrapper: "block text-sm font-medium text-gray-700",
        required: "text-red-500"
      },
      input: {
        base: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
        error: "border-red-500",
        normal: "border-gray-300"
      },
      error: "text-red-500 text-sm"
    },
    submit: {
      wrapper: "pt-4",
      button: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
    }
  }
}; 