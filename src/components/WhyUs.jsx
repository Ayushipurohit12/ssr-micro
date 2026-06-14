const reasons = [
  {
    icon: "🎯",
    title: "Fast Executions",
    desc: "Microfinance's focus on fast executions stems from its core purpose of providing immediate access to financial services. We process loans quickly so you get funds when you need them.",
  },
  {
    icon: "👩‍💼",
    title: "Expert Guide & Support",
    desc: "Our trained relationship managers offer guidance and support to borrowers, helping them succeed with their financial goals and business plans.",
  },
  {
    icon: "💰",
    title: "Financial Security",
    desc: "We help individuals and small businesses achieve financial security by providing access to credit, savings, and other financial services.",
  },
  {
    icon: "🔄",
    title: "Easy Refinancing",
    desc: "SSB Micro Foundation offers refinancing options to borrowers for several purposes, including reducing interest rates and extending loan terms.",
  },
  {
    icon: "📄",
    title: "Minimal Documentation",
    desc: "We have simplified the documentation process so you don't need to worry about paperwork. A few basic documents are all that's required.",
  },
  {
    icon: "🔒",
    title: "100% Transparent",
    desc: "We believe in full transparency — no hidden charges, no surprises. Every term and condition is clearly communicated before loan disbursal.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-4">
            Why People <span className="text-yellow-500">Choose Us!</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            SSB Micro Foundation empowers individuals and families in Udaipur by
            providing access to secured and unsecured loan services with caring
            guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-yellow-50 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a3c6e] mb-2">
                {r.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
