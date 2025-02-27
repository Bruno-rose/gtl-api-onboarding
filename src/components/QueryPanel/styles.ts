export const styles = {
  container: "bg-[#0a0c0d] rounded-xl border border-[#0d9373]/20 p-8 h-full",
  header: {
    wrapper: "flex items-center mb-6",
    iconWrapper: "mr-4 bg-[#0a0c0d] p-3 rounded-xl border border-[#0d9373]/20",
    title: "text-2xl font-bold text-[#07c983]"
  },
  description: "text-white/80 text-lg mb-8 leading-relaxed",
  form: {
    wrapper: "space-y-6",
    field: {
      wrapper: "space-y-2",
      label: {
        wrapper: "block text-sm font-semibold text-white/80",
        required: "text-[#07c983] ml-1"
      },
      input: {
        base: "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9373] transition-all bg-[#0a0c0d] text-white",
        normal: "border-[#0d9373]/20 hover:border-[#0d9373]/40",
        error: "border-red-500/50 bg-red-500/10"
      },
      error: "text-red-400 text-sm font-medium"
    },
    submit: {
      wrapper: "pt-6",
      button: "w-full bg-[#0d9373] hover:bg-[#07c983] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
    }
  }
}; 