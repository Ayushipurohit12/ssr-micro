export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a3c6e] to-[#1e5799] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-3">SSB Micro Foundation</h3>
              <p className="text-blue-200 mb-6">
                Delivering secured and unsecured loan support to Udaipur
                families and businesses with care and trust.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "5000+", label: "Clients Served" },
                  { val: "₹10Cr+", label: "Loans Given" },
                  { val: "98%", label: "Satisfaction Rate" },
                  { val: "10+", label: "Years Active" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-2xl font-extrabold text-yellow-400">
                      {s.val}
                    </p>
                    <p className="text-xs text-blue-200">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative offset box */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 rounded-2xl -z-10 opacity-40"></div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
              About Company
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-5 leading-snug">
              We Help Our Clients Achieve{" "}
              <span className="text-yellow-500">Their Desired Goals</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SSB Micro Foundation offers both secured and unsecured loan
              products designed to support low-income individuals, small
              businesses, and rural households across Udaipur and surrounding
              areas.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "💼",
                  title: "Support On Raising Funds",
                  desc: "Our services are designed to reach excluded customers and help them become financially self-sufficient.",
                },
                {
                  icon: "🏪",
                  title: "Outsourced Small Business",
                  desc: "A small business operates with limited capital, workforce, and machinery. It's often locally based and crucial to grassroots economies.",
                },
                {
                  icon: "🤝",
                  title: "Group & Personal Loans",
                  desc: "We offer personal loans, small business loans, and group loans to meet every financial need.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#1a3c6e] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block bg-[#1a3c6e] text-white font-bold px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-[#1a3c6e] transition-all duration-300"
            >
              Get Started Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
