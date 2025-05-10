import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Resell Your Unused Software Licenses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg mb-6"
      >
        SoftSell helps you get value back by selling unused software easily.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default Hero;
