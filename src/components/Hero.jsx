export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f2756 0%, #1a3c6e 50%, #1e5799 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white opacity-5 -translate-y-1/3 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-yellow-400 opacity-5 translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-white">
          <span className="bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-6">
            🏦 Trusted Microfinance Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Finance & Loan Services{" "}
            <span className="text-yellow-400">That Work</span> for You
          </h1>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed max-w-lg">
            SSB Micro Foundation provides secured and unsecured loan solutions
            for individuals, families, and small businesses in Udaipur. Fast
            approvals, transparent lending, and expert guidance from application
            to repayment.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-[#1a3c6e] font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 hover:scale-105"
            >
              Apply for Loan →
            </a>
            <a
              href="#about"
              className="border-2 border-white/40 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex gap-8 flex-wrap">
            {[
              { val: "5000+", label: "Happy Clients" },
              { val: "₹10Cr+", label: "Loans Disbursed" },
              { val: "10+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-yellow-400">
                  {s.val}
                </p>
                <p className="text-blue-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration Card */}
        <div className="relative flex justify-center">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl max-w-sm w-full">
            {/* Loan Card Mock */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 mb-6 shadow-xl text-[#1a3c6e]">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1">
                Personal Loan
              </p>
              <p className="text-3xl font-extrabold mb-1">₹50,000</p>
              <p className="text-sm font-medium">Approved ✓</p>
              <div className="mt-4 flex justify-between text-xs font-semibold">
                <span>Interest: 12% p.a.</span>
                <span>Tenure: 12 months</span>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: "✅", text: "Instant Approval" },
                { icon: "📄", text: "Minimal Documentation" },
                { icon: "🔒", text: "100% Secure Process" },
                { icon: "💳", text: "Flexible Repayment" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
            RBI Registered ✓
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
