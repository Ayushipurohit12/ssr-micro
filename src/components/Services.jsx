const services = [
  {
    icon: "👤",
    title: "Personal Loan",
    desc: "Quick personal loans for medical emergencies, education, travel, or any personal need with flexible repayment options.",
    features: ["Up to ₹2 Lakh", "12-36 months tenure", "Minimal docs"],
    color: "from-blue-500 to-[#1a3c6e]",
  },
  {
    icon: "👥",
    title: "Group Loans",
    desc: "We provide secure loans for groups, backed by joint liability, ensuring minimal risk and faster processing for communities.",
    features: ["Group of 5-20", "Lower interest rate", "Joint liability"],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: "🏪",
    title: "Small Business Loan",
    desc: "Fuel your small business growth with our tailored loans for equipment, inventory, or working capital needs.",
    features: ["Up to ₹5 Lakh", "Flexible tenure", "Quick disbursal"],
    color: "from-green-500 to-green-700",
  },
  {
    icon: "🏠",
    title: "Housing Loan",
    desc: "Affordable housing loans to help low-income families build, renovate, or purchase their dream home.",
    features: ["Up to ₹10 Lakh", "Long tenure", "Low EMI"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: "🎓",
    title: "Education Loan",
    desc: "Support your child's education with our easy education loans. Invest in the future today.",
    features: ["Competitive rate", "Moratorium period", "Tax benefit"],
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: "🌾",
    title: "Agriculture Loan",
    desc: "Special loans for farmers and rural entrepreneurs to support crop production and agricultural activities.",
    features: ["Seasonal repayment", "Low interest", "Govt. linked"],
    color: "from-amber-500 to-amber-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-4">
            Our Financial <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Comprehensive loan solutions designed to meet every need — personal,
            business, or community-based.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Top gradient strip */}
              <div className={`h-2 bg-gradient-to-r ${s.color}`}></div>
              <div className="p-6">
                <div
                  className={`text-4xl mb-4 bg-gradient-to-br ${s.color} bg-clip-text`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a3c6e] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {s.desc}
                </p>
                <ul className="space-y-1 mb-5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-block text-sm font-bold px-5 py-2 rounded-full bg-gradient-to-r ${s.color} text-white hover:opacity-90 transition`}
                >
                  Apply Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
