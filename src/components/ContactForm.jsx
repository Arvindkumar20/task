import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) return setError('Please fill all required fields.');
    alert('Form submitted successfully!');
    setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
    setError('');
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-10"
      >
        Get In Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Name"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Company"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <motion.select
          whileFocus={{ scale: 1.02 }}
          className="p-3 rounded bg-gray-100 dark:bg-gray-800"
          value={form.licenseType}
          onChange={(e) => setForm({ ...form, licenseType: e.target.value })}
        >
          <option value="">Select License Type</option>
          <option>Windows</option>
          <option>MS Office</option>
          <option>Adobe</option>
          <option>Other</option>
        </motion.select>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          placeholder="Message"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
