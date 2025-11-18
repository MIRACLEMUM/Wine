import React, { useEffect } from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaMoneyBillWave,
  FaGlobeAfrica,
  FaBoxOpen,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Shipping: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const shippingItems = [
    {
      icon: <FaGlobeAfrica />,
      title: "Worldwide Delivery",
      text: "We ship premium wines anywhere in the world with trusted and reliable logistics partners.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Choose between Standard and Express delivery options for a smoother experience.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Packaging",
      text: "Every bottle is wrapped with shock-proof protection to ensure safe arrival.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Rates",
      text: "Enjoy premium shipping at the best prices — free for orders above $200.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Real-time Tracking",
      text: "Monitor your package from warehouse to doorstep with our tracking system.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-24 md:pt-32"
      style={{
        backgroundImage: "url('/products/red wine.jpg')", // Put your background image inside public folder
      }}
    >
      <div className="backdrop-blur-sm bg-black/70 min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-16">
          
          {/* PAGE TITLE */}
          <h1
            data-aos="zoom-in"
            className="text-4xl md:text-5xl font-bold text-amber-400 text-center mb-10"
          >
            Premium Shipping Experience
          </h1>

          <p
            data-aos="fade-up"
            className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
          >
            At Keinnox Wine Store, every order receives world-class handling,
            luxury packaging, and seamless delivery from our cellar to your door.
          </p>

          {/* GRID SECTION */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shippingItems.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-black/60 border border-amber-500/20 p-6 rounded-xl backdrop-blur-sm shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
              >
                <div className="text-amber-400 text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </section>
      </div>
    </main>
  );
};

export default Shipping;
