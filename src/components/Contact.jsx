import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    loan: "Personal Loan",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      name: "",
      phone: "",
      email: "",
      loan: "Personal Loan",
      message: "",
    });
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-4">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Apply for a loan or get in touch with our team. We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 8441017530",
                  link: "tel:+918441017530",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "bhavanishankar10081997@gmail.com",
                  link: "mailto:bhavanishankar10081997@gmail.com",
                },
                {
                  icon: "👤",
                  label: "Primary Director",
                  value: "Bhavani Shankar Menariya",
                  link: "#",
                },
                {
                  icon: "📍",
                  label: "Address",
                  value:
                    "Chatur Bag Colony, Pech Vale Bavji Ki Gali, Ward No. 14 Fatehnagar, Udaipur Mavli, Rajasthan",
                  link: "#",
                },
                {
                  icon: "🕐",
                  label: "Working Hours",
                  value: "Mon - Sat: 9:00 AM – 6:00 PM",
                  link: "#",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <p className="font-bold text-[#1a3c6e] text-sm">
                      {item.label}
                    </p>
                    <a
                      href={item.link}
                      className="text-gray-600 text-sm hover:text-yellow-500 transition"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 mb-8">
              <p className="font-bold text-[#1a3c6e] mb-4">Directors</p>
              <div className="grid gap-4 text-sm text-gray-600">
                {[
                  {
                    name: "Bharat Lal Menariya",
                    role: "Primary Director",
                    detail: "+91 8824636142 | menariyabharat0@gmail.com",
                  },
                  {
                    name: "Pushkar Lal Menariya",
                    role: "Director",
                    detail: "+91 9983182182 | Pmenariya88@gmail.com",
                  },
                  {
                    name: "Bhavani Shankar Menariya",
                    role: "Director",
                    detail: "+91 8441017530 | bhavanishankar10081997@gmail.com",
                  },
                ].map((director) => (
                  <div
                    key={director.name}
                    className="rounded-2xl bg-gray-50 p-4"
                  >
                    <p className="font-semibold text-[#1a3c6e]">
                      {director.name}
                    </p>
                    <p className="text-xs text-yellow-500 uppercase tracking-[0.18em] mb-1">
                      {director.role}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {director.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#1a3c6e] rounded-2xl p-6 text-white text-center">
              <p className="text-2xl mb-2">🗺️</p>
              <p className="font-bold mb-2">Find Us On Map</p>
              <a
                href="https://www.google.com/maps/search/Chatur+Bag+Colony+Pech+Vale+Bavji+Ki+Gali+Ward+No+14+Fatehnagar+Udaipur+Mavli+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-[#1a3c6e] font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-400 transition inline-block"
              >
                Open Google Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-bold text-[#1a3c6e] mb-6">
              Apply for a Loan
            </h3>

            {submitted && (
              <div className="bg-green-50 border border-green-300 text-green-700 rounded-xl p-4 mb-6 text-sm font-semibold">
                ✅ Application submitted! We'll contact you shortly.
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-600 mb-1 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3c6e] transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 mb-1 block">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3c6e] transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3c6e] transition"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 mb-1 block">
                  Loan Type *
                </label>
                <select
                  value={form.loan}
                  onChange={(e) => setForm({ ...form, loan: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3c6e] transition bg-white"
                >
                  <option>Personal Loan</option>
                  <option>Group Loan</option>
                  <option>Small Business Loan</option>
                  <option>Housing Loan</option>
                  <option>Education Loan</option>
                  <option>Agriculture Loan</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 mb-1 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  placeholder="Tell us about your loan requirement..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3c6e] transition resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#1a3c6e] text-white font-bold py-3 rounded-xl hover:bg-yellow-500 hover:text-[#1a3c6e] transition-all duration-300"
              >
                Submit Application →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
