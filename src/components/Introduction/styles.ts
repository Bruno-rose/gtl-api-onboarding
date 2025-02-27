export const styles = {
  container: "max-w-4xl mx-auto bg-[#0a0c0d] rounded-xl border border-[#0d9373]/20 p-8",
  header: {
    wrapper: "text-center mb-12",
    title: "text-4xl font-bold text-[#07c983] mb-3",
    subtitle: "text-xl text-white/80"
  },
  content: {
    wrapper: "mb-12 space-y-6",
    text: "text-white/80 text-lg leading-relaxed",
    section: {
      title: "text-2xl font-semibold text-white mb-4",
      list: "list-disc pl-6 mb-6 text-white/80 space-y-3"
    }
  },
  operations: {
    container: "border-t border-[#0d9373]/20 pt-12",
    title: "text-3xl font-bold text-white mb-8 text-center",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
    card: {
      wrapper: "bg-[#0a0c0d] p-6 rounded-xl border border-[#0d9373]/20 transition-all hover:border-[#0d9373]",
      header: {
        wrapper: "flex items-center mb-4",
        number: "bg-[#0d9373] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg font-bold",
        title: "text-xl font-bold text-white"
      },
      content: {
        wrapper: "flex items-start space-x-3",
        icon: "w-6 h-6 text-[#07c983]",
        text: "text-white/80 leading-relaxed",
        code: "bg-[#0a0c0d] px-2 py-1 rounded-md font-mono text-sm text-[#07c983] border border-[#0d9373]/20"
      }
    }
  },
  info: {
    container: "border-t border-[#0d9373]/20 pt-12 mt-12",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-12",
    section: {
      title: "text-2xl font-semibold text-white mb-4",
      text: "text-white/80 mb-3",
      code: "bg-[#0a0c0d] p-4 rounded-xl font-mono text-sm border border-[#0d9373]/20"
    }
  }
}; 