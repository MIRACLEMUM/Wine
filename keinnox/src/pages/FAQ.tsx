// src/pages/FAQ.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you deliver internationally?",
    answer:
      "Yes! We ship premium wines and spirits to most countries worldwide with careful packaging to ensure your order arrives in perfect condition.",
  },
  {
    question: "How do I verify product authenticity?",
    answer:
      "Every bottle comes with a verification certificate and tracking info from our trusted suppliers, guaranteeing authenticity.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, and secure bank transfers for your convenience.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Returns are accepted within 7 days of delivery if the product is unopened and in its original condition.",
  },
  {
    question: "Do you offer gift packaging?",
    answer:
      "Absolutely! You can select luxury gift wrapping at checkout for any order to make it perfect for special occasions.",
  },
  {
    question: "How do I store my premium wines and spirits?",
    answer:
      "Keep wines in a cool, dark place at a consistent temperature. Spirits should be stored upright, away from direct sunlight.",
  },
  {
    question: "Do you offer personalized recommendations?",
    answer:
      "Yes! Our experts can suggest products based on your taste preferences. Contact us through our inquiry form for personalized advice.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-black text-gray-100 pt-24 md:pt-32 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-amber-400 mb-12 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span className="text-amber-400 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300 text-sm">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQ;
