const stats = [
  { icon: "👥", value: "5,000+", label: "Happy Clients" },
  { icon: "💰", value: "₹10 Cr+", label: "Loans Disbursed" },
  { icon: "📋", value: "15,000+", label: "Loans Processed" },
  { icon: "🏆", value: "10+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, #0f2756 0%, #1a3c6e 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <div className="text-4xl mb-2">{s.icon}</div>
              <p className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-1">{s.value}</p>
              <p className="text-blue-200 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
