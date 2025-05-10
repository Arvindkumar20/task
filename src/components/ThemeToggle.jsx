import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="flex justify-end py-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;