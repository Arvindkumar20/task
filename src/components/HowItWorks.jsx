import React from 'react';
import { FaUpload, FaSearchDollar, FaMoneyCheckAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUpload size={40} />,
    title: 'Upload License',
    desc: 'Easily upload your unused software license with our secure form. Your data stays safe and encrypted.',
  },
  {
    icon: <FaSearchDollar size={40} />,
    title: 'Get Valuation',
    desc: 'Our smart system instantly evaluates your license and gives you the best possible resale value.',
  },
  {
    icon: <FaMoneyCheckAlt size={40} />,
    title: 'Get Paid',
    desc: 'Once approved, we directly credit your earnings to your preferred payment method—fast and secure!',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4 flex justify-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full shadow-inner">
                <span className="text-blue-600 dark:text-blue-400">{step.icon}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
