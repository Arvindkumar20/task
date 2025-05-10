import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ananya Gupta',
    role: 'IT Admin',
    company: 'TechFlow',
    feedback:
      'SoftSell made it super easy to sell off unused software. The process was smooth, support was helpful, and I got paid quickly!',
  },
  {
    name: 'Raj Verma',
    role: 'Procurement Head',
    company: 'LogiSoft',
    feedback:
      'Amazing platform! We sold multiple licenses without hassle. The team is very professional and the valuation was great.',
  },
  {
    name: 'Meera Sinha',
    role: 'Operations Lead',
    company: 'CloudBridge',
    feedback:
      'SoftSell helped us recover money from licenses we were no longer using. Great initiative, super easy process!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        What Our Customers Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4 text-blue-600 dark:text-blue-400">
              <FaQuoteLeft size={24} />
            </div>
            <p className="mb-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">“{t.feedback}”</p>
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.role}, {t.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
