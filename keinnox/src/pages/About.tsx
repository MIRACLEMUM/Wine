import React from "react";
import { motion, MotionConfig } from "framer-motion";

const About: React.FC = () => {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeInOut" }}>
      <div className="bg-black text-gray-200">

        {/* HERO SECTION */}
        <div
          className="w-full h-[60vh] bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/hero-drinks.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold text-amber-500"
            >
              About Our Brand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-gray-300 max-w-xl"
            >
              Redefining luxury drinks with authenticity, elegance, and trust.
            </motion.p>
          </div>
        </div>

        {/* WHO WE ARE */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-amber-500 mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            We are a premium drink retail brand dedicated to delivering the finest wines, champagnes,
            whiskies and spirits. Our mission is simple — to bring quality, authenticity, and luxury
            directly to your doorstep.
          </motion.p>
        </section>

        {/* CORE VALUES */}
        <section className="bg-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-amber-500 mb-14 text-center"
            >
              Our Core Values
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Authenticity", text: "All drinks are original, sealed and verified." },
                { title: "Luxury", text: "Premium quality that speaks elegance." },
                { title: "Trust", text: "Fast delivery, transparent pricing." },
                { title: "Excellence", text: "A commitment to world-class service." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-6 bg-black rounded-xl border border-zinc-700 hover:border-amber-500 transition"
                >
                  <h3 className="text-xl font-bold text-amber-500 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-amber-500 mb-10 text-center"
          >
            Our Journey
          </motion.h2>

          <div className="border-l border-amber-500 ml-4 space-y-10">
            {[
              { year: "2022", text: "Brand idea was created." },
              { year: "2023", text: "First premium drink collection released." },
              { year: "2024", text: "Expanded into luxury wines & champagnes." },
              { year: "2025", text: "Launched our online luxury drink marketplace." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="ml-6"
              >
                <h3 className="text-amber-500 text-2xl font-bold">{item.year}</h3>
                <p className="text-gray-400 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-zinc-950 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Explore Our Exclusive Collections
          </motion.h2>

          <a href="/collections">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-6 px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition"
            >
              View Drinks
            </motion.button>
          </a>
        </section>
      </div>
    </MotionConfig>
  );
};

export default About;
