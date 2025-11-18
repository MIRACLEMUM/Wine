// src/pages/Contact.tsx
import { PhoneCall, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappLink = () => {
    const text = `Hello Keinnox!%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
      message
    )}`;
    return `https://wa.me/2349051961599?text=${text}`;
  };

  return (
    <main className="bg-black text-gray-100 pt-24 md:pt-32">
      {/* HERO */}
      <section
        aria-label="Contact hero"
        className="relative h-[60vh] md:h-[70vh] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/hero3.avif')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Get in Touch <span className="text-amber-400">with Keinnox</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              We’d love to hear from you! Whether you have questions about our
              premium collection or want to collaborate, reach out below.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-400 mb-6">Contact Details</h2>

          <div className="flex items-center gap-4">
            <PhoneCall className="text-amber-400" size={24} />
            <p className="text-gray-300 text-lg">+234 9051961599</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-amber-400" size={24} />
            <p className="text-gray-300 text-lg">etidaraekere97@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-amber-400" size={24} />
            <p className="text-gray-300 text-lg">Uyo, Akwa Ibom, Nigeria</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-6">
              <a
                href="https://wa.me/2349051961599"
                target="_blank"
                className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-900 transition"
              >
                <MessageCircle size={22} className="text-amber-400" />
              </a>

              <a
                href="https://www.facebook.com/share/1EfZy9225V/"
                target="_blank"
                className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-900 transition"
              >
                <Facebook size={22} className="text-amber-400" />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Form */}
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block mb-1 text-gray-300">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-gray-200 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-gray-200 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-gray-200 focus:border-amber-400 outline-none"
              />
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-amber-400 text-black font-semibold rounded-full hover:scale-105 transition flex items-center justify-center gap-2"
            >
              Send Message via WhatsApp
            </a>
          </form>
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
};

export default Contact;
