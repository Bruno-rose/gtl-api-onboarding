export const styles = {
  container: "max-w-4xl mx-auto bg-[#0a0c0d] rounded-xl border border-[#0d9373]/20 p-8",
  header: {
    wrapper: "text-center mb-12",
    iconWrapper: "inline-flex items-center justify-center w-24 h-24 bg-[#0a0c0d] border border-[#0d9373]/20 rounded-full mb-6",
    icon: "w-14 h-14 text-[#07c983]",
    title: "text-4xl font-bold text-[#07c983] mb-3",
    subtitle: "text-xl text-white/80 font-medium"
  },
  description: "text-white/80 text-lg mb-12 leading-relaxed text-center",
  nextSteps: {
    container: "bg-[#0a0c0d] rounded-xl border border-[#0d9373]/20 p-8 mb-12",
    title: "text-2xl font-bold text-white mb-6",
    list: "space-y-6",
    item: {
      wrapper: "flex items-start space-x-4 transition-all hover:translate-x-2",
      iconWrapper: "flex-shrink-0 mt-1 bg-[#0a0c0d] p-2.5 rounded-xl border border-[#0d9373]/20",
      icon: "w-6 h-6 text-[#07c983]",
      content: {
        title: "font-semibold text-lg text-white mb-1",
        description: "text-white/80 leading-relaxed"
      }
    }
  },
  resources: {
    container: "border-t border-[#0d9373]/20 pt-12",
    title: "text-3xl font-bold text-white mb-8 text-center",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
    card: {
      wrapper: "block group transition-all hover:scale-105",
      container: "bg-[#0a0c0d] border border-[#0d9373]/20 rounded-xl p-6 hover:border-[#0d9373] transition-colors",
      header: {
        wrapper: "flex items-center mb-4",
        iconWrapper: "mr-4 bg-[#0a0c0d] p-3 rounded-xl border border-[#0d9373]/20",
        icon: "w-7 h-7 text-[#07c983]",
        title: "text-xl font-bold text-white group-hover:text-[#07c983] transition-colors"
      },
      description: "text-white/80 leading-relaxed mb-4",
      link: {
        wrapper: "flex items-center text-[#07c983] font-medium transition-all group-hover:translate-x-2",
        text: "text-sm",
        icon: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
      }
    }
  },
  support: {
    container: "mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-8 shadow-sm",
    content: {
      wrapper: "flex items-start space-x-6",
      iconWrapper: "flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl shadow-sm",
      icon: "w-7 h-7 text-blue-600",
      textWrapper: "flex-grow",
      title: "text-xl font-bold text-gray-800 mb-2",
      description: "text-gray-600 leading-relaxed mb-4",
      link: "inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
    }
  }
}; 