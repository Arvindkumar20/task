import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaHandsHelping, FaThumbsUp } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaShieldAlt size={30} />,
    title: 'Secure Transactions',
    desc: 'Your software licenses are transferred using industry-standard encryption, ensuring peace of mind and full protection.',
  },
  {
    icon: <FaClock size={30} />,
    title: 'Quick Valuations',
    desc: 'Get real-time license value estimates within minutes — no long waits, just fast and accurate pricing.',
  },
  {
    icon: <FaHandsHelping size={30} />,
    title: '24/7 Customer Support',
    desc: 'Our friendly experts are available around the clock to assist you at every step of your selling journey.',
  },
  {
    icon: <FaThumbsUp size={30} />,
    title: 'Trusted by Thousands',
    desc: 'From freelancers to enterprises, SoftSell is trusted by a growing global user base for reliable license resale.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Why Choose SoftSell?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="flex gap-4 items-start p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition"
          >
            <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
