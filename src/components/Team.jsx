const team = [
  {
    name: "Rajesh Kumar Sharma",
    role: "Founder & CEO",
    emoji: "👨‍💼",
    desc: "10+ years in microfinance and rural banking sector.",
    color: "from-blue-500 to-[#1a3c6e]",
  },
  {
    name: "Priya Singh",
    role: "Loan Manager",
    emoji: "👩‍💼",
    desc: "Expert in personal and group loan processing.",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Amit Verma",
    role: "Financial Advisor",
    emoji: "👨‍💻",
    desc: "Specializes in small business financial planning.",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Sunita Gupta",
    role: "Customer Relations Head",
    emoji: "👩‍🏫",
    desc: "Dedicated to ensuring client satisfaction and support.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-mt-28 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-4">
            Meet Our <span className="text-yellow-500">Expert Team</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A dedicated team of financial professionals committed to your
            success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`h-28 bg-gradient-to-br ${member.color} flex items-center justify-center text-6xl`}
              >
                {member.emoji}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a3c6e] text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs">{member.desc}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a
                    href="#"
                    className="text-[#1a3c6e] hover:text-yellow-500 text-sm"
                  >
                    💼
                  </a>
                  <a
                    href="#"
                    className="text-[#1a3c6e] hover:text-yellow-500 text-sm"
                  >
                    📧
                  </a>
                  <a
                    href="#"
                    className="text-[#1a3c6e] hover:text-yellow-500 text-sm"
                  >
                    📞
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
