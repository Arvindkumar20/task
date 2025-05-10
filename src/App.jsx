import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
      <div className="max-w-6xl mx-auto px-4">
      <Navbar/>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </div>
    </div>
  );
};
export default App;