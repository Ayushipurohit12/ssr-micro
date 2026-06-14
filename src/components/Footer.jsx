export default function Footer() {
  return (
    <footer className="bg-[#0f2756] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center text-[#1a3c6e] font-extrabold text-sm">
                SF
              </div>
              <div>
                <p className="font-extrabold text-lg">SSB MICRO FOUNDATION</p>
                <p className="text-yellow-400 text-xs">
                  Secured & Unsecured Loan Services
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Providing secured and unsecured loan services to families and
              small businesses in Udaipur and nearby regions.
            </p>
            <div className="flex gap-3 mt-4">
              {["FB", "IG", "TW", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-[#1a3c6e] flex items-center justify-center text-xs font-bold transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {[
                "Home",
                "About Us",
                "Services",
                "Team",
                "Gallery",
                "Contact Us",
                "Login",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-yellow-400 transition flex items-center gap-2"
                  >
                    <span className="text-yellow-500">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {[
                "Personal Loan",
                "Group Loan",
                "Small Business Loan",
                "Housing Loan",
                "Education Loan",
                "Agriculture Loan",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-yellow-400 transition flex items-center gap-2"
                  >
                    <span className="text-yellow-500">›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex gap-3">
                <span>📞</span>
                <a href="tel:+918441017530" className="hover:text-yellow-400">
                  +91 8441017530
                </a>
              </li>
              <li className="flex gap-3">
                <span>✉️</span>
                <a
                  href="mailto:bhavanishankar10081997@gmail.com"
                  className="hover:text-yellow-400 break-all"
                >
                  bhavanishankar10081997@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <span>👤</span>
                <span>Primary Director: Bhavani Shankar Menariya</span>
              </li>
              <li className="flex gap-3">
                <span>👥</span>
                <span>
                  Directors: Bhavani Shankar Menariya, Bharat Lal Menariya,
                  Pushkar Lal Menariya
                </span>
              </li>
              <li className="flex gap-3">
                <span>📍</span>
                <span>
                  Chatur Bag Colony, Pech Vale Bavji Ki Gali, Ward No. 14
                  Fatehnagar, Udaipur Mavli, Rajasthan
                </span>
              </li>
              <li className="flex gap-3">
                <span>🕐</span>
                <span>Mon–Sat: 9AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
            <p>
              © {new Date().getFullYear()} SSB Micro Foundation. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
