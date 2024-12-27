"use client";
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send the form data (e.g., via an API or email service)
    console.log('Form Submitted:', formData);
    alert('Thank you for reaching out!');

    // Clear the form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
