// app/contact/page.tsx
'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (You can integrate your own API here)
      setTimeout(() => {
        setStatus('Your message has been sent successfully!');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      setStatus('There was an error sending your message.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-teal-700 min-h-screen flex justify-center items-center text-white">
      <div className="bg-darkGreen p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-4xl font-semibold mb-6 text-center">Send Us a Message</h2>
        <p className="text-center mb-4 text-lg">We would love to hear from you!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-teal-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-teal-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-teal-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows={5}
              required
            />
          </div>

          {status && <p className="text-center text-sm mt-4">{status}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full p-3 mt-4 text-lg font-semibold bg-teal-900 rounded-md transition duration-300 hover:bg-teal-800 ${
                isSubmitting ? 'bg-teal-400 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
