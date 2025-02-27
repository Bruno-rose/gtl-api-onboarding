export const styles = {
  container: "border-t border-[#0d9373]/20 bg-[#0a0c0d]",
  header: {
    wrapper: "flex items-center justify-between p-6 cursor-pointer hover:bg-[#0a0c0d]/50 transition-colors",
    title: {
      wrapper: "flex items-center space-x-3",
      text: "text-xl font-bold text-white",
      count: "bg-[#0d9373] text-white text-sm font-medium px-3 py-1 rounded-full"
    },
    button: "text-white/60 hover:text-white transition-colors",
    icon: "w-6 h-6"
  },
  content: {
    wrapper: "max-h-96 overflow-y-auto",
    empty: "p-8 text-center text-white/60 text-lg",
    list: "divide-y divide-[#0d9373]/20",
    item: {
      wrapper: "p-6 hover:bg-[#0d9373]/10 cursor-pointer transition-colors",
      content: {
        wrapper: "flex items-start space-x-4",
        iconWrapper: "flex-shrink-0 bg-[#0a0c0d] p-2 rounded-lg border border-[#0d9373]/20",
        icon: "w-5 h-5 text-[#07c983]",
        main: {
          wrapper: "flex-1 min-w-0",
          header: {
            wrapper: "flex items-center justify-between mb-2",
            title: "text-lg font-semibold text-white truncate capitalize",
            time: "text-sm text-white/60"
          },
          details: "text-sm text-white/80 font-mono whitespace-pre-wrap overflow-x-auto max-h-32 rounded-lg bg-[#0a0c0d]/50 p-2"
        }
      }
    }
  }
}; 