import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-6">I'd love to hear from you! Please fill out the form below or reach out via email.</p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input className="border border-gray-300 p-2 w-full rounded" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea className="border border-gray-300 p-2 w-full rounded" id="message" rows="4" required></textarea>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;