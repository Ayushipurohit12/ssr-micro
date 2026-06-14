const testimonials = [
  {
    name: "Meena Devi",
    role: "Small Business Owner, Udaipur",
    quote:
      "SSB Micro Foundation helped me start my tailoring business. The process was simple and the team was very supportive. I got the loan within 3 days!",
    rating: 5,
    emoji: "👩",
  },
  {
    name: "Ramesh Yadav",
    role: "Farmer, Udaipur District",
    quote:
      "I took an agriculture loan to buy seeds and equipment for my farm. The flexible repayment schedule was perfect for my seasonal income.",
    rating: 5,
    emoji: "👨‍🌾",
  },
  {
    name: "Sunita Sharma",
    role: "Group Loan Member",
    quote:
      "Our women's group got a loan to buy a sewing machine. It changed our lives. SSB Micro Foundation really understands our community needs.",
    rating: 5,
    emoji: "👩‍💼",
  },
  {
    name: "Dinesh Kumar",
    role: "Shop Owner, Udaipur",
    quote:
      "I expanded my grocery shop with a small business loan from SSB Micro Foundation. The interest rate was fair and the process was hassle-free.",
    rating: 5,
    emoji: "🧑‍💼",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            Happy Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-4">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {Array(t.rating)
                  .fill("⭐")
                  .map((star, i) => (
                    <span key={i} className="text-sm">
                      {star}
                    </span>
                  ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{t.emoji}</div>
                <div>
                  <p className="font-bold text-[#1a3c6e] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
