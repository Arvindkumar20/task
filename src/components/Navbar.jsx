import React from 'react';
// import { useTheme } from 'next-themes'; // Or your own theme context
// import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
//   const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" sticky w-full px-6 py-4 bg-white dark:bg-gray-900  flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SoftSell</h1>

      <ThemeToggle />
    </motion.nav>
  );
};

export default Navbar;
