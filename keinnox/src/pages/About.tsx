// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" as const } 
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { duration: 1, ease: "easeOut" as const } 
  },
};

const About: React.FC = () => {
  return (
    <>
      <main className="bg-black text-gray-100 pt-24 md:pt-32">

        {/* HERO */}
        <section
          aria-label="Keinnox hero"
          className="relative h-[70vh] md:h-[78vh] overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" as const }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/public/hero image.avif')" }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="w-full md:w-2/3 lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Curated Luxury Drinks{" "}
                <span className="text-amber-400">for Every Celebration</span>
              </h1>

              <p className="text-gray-300 text-lg mb-8">
                We source rare wines, champagnes, whiskies and spirits from the
                world’s most respected estates — delivering only verified premium
                luxury.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/#products"
                  className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-full shadow hover:scale-105 transition"
                >
                  Explore Collection
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-zinc-700 text-gray-300 rounded-full hover:bg-zinc-900 transition"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-amber-400">
                Crafting Moments. Defining Luxury.
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Founded in 2025, <strong>Keinnox</strong> is a luxury marketplace
                for premium wines and spirits. We curate—not just sell—ensuring
                every bottle meets the highest standards of authenticity and craft.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Every product is vetted for quality, rarity, and taste. You get
                nothing but verified premium excellence.
              </p>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl border border-zinc-800"
            >
              <img
                src="/products/red wine.jpg"
                alt="Keinnox curation"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-zinc-900 py-16 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                Our Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Luxury is more than aesthetics — it’s a refined experience of
                quality, heritage and trust.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To make premium wines and spirits accessible, authentic and
                unforgettable.
              </p>
            </div>
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-400 text-center mb-12"
          >
            Why Choose Keinnox
          </motion.h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Verified Authenticity", "Premium Experience", "Reliable Support"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-6 bg-black/30 rounded-xl border border-zinc-800"
                >
                  <h4 className="text-lg font-semibold text-amber-300 mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-300">
                    Every bottle is sourced from trusted global suppliers.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* JOURNEY TIMELINE */}
        <section className="bg-zinc-950/40 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-bold text-amber-400 text-center mb-12"
            >
              Our Journey
            </motion.h3>

            <div className="space-y-10">
              {[
                { year: "2022", title: "A vision was born", desc: "The Keinnox concept..." },
                { year: "2023", title: "First curated collection", desc: "We expanded..." },
                { year: "2024", title: "Brand expansion", desc: "Champagnes and rare whiskies..." },
                { year: "2025", title: "Marketplace launch", desc: "Full e-commerce platform..." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="lg:flex lg:items-start lg:gap-10"
                >
                  <div className="lg:w-1/4">
                    <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black text-lg">
                      {item.year}
                    </div>
                  </div>

                  <div className="lg:w-3/4 mt-4 lg:mt-0">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-gray-400 mt-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-16 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6"
          >
            <h3 className="text-3xl font-bold text-amber-400 text-center mb-12">
              The Team
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { name: "Mr Etidara", role: "Head Curator", img: "/products/CEO1.jpg" },
                { name: "Mr Jayson", role: "Logistics/Investor", img: "/products/investor3.jpg" },
                { name: "Mr usen", role: "Client Relations", img: "/products/investor2.jpg" },
                { name: "Marketing director", role: "Brand Strategy", img: "/products/CEO1.jpg" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-center p-5 bg-black/20 border border-zinc-800 rounded-xl"
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border border-zinc-700">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-semibold">{p.name}</h4>
                  <p className="text-gray-400 text-sm">{p.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-zinc-900">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to discover fine drinks?
            </h3>
            <p className="text-gray-400 mb-6">
              Browse our curated collection and find the perfect bottle for your
              next celebration.
            </p>
            <a
              href="/#products"
              className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              View Collections
            </a>
          </motion.div>
        </section>

      </main>

      
    </>
  );
};

export default About;
