import img1 from "../assets/WhatsApp Image 2026-06-08 at 5.19.05 PM.jpeg";
import img2 from "../assets/WhatsApp Image 2026-06-08 at 5.19.06 PM.jpeg";
import img3 from "../assets/WhatsApp Image 2026-06-08 at 5.19.06 PM (1).jpeg";
import img4 from "../assets/WhatsApp Image 2026-06-08 at 5.19.06 PM (2).jpeg";
import img5 from "../assets/WhatsApp Image 2026-06-08 at 5.19.07 PM.jpeg";
import img6 from "../assets/WhatsApp Image 2026-06-08 at 5.19.08 PM.jpeg";
import img7 from "../assets/WhatsApp Image 2026-06-08 at 5.19.09 PM.jpeg";

const galleryItems = [
  { image: img1, title: "Micro Loan Support" },
  { image: img2, title: "Client Assistance" },
  { image: img3, title: "Loan Processing" },
  { image: img4, title: "Field Outreach" },
  { image: img5, title: "Community Impact" },
  { image: img6, title: "Customer Service" },
  { image: img7, title: "Success Stories" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c6e] mt-2 mb-4">
            Our <span className="text-yellow-500">Assets & Photos</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse photos from our team, field visits, client interactions, and
            financial services operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="bg-white p-5">
                <h3 className="font-semibold text-[#1a3c6e] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  High-quality visuals showing our business and client outreach
                  across Udaipur.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
