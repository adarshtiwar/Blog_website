import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left: Contact Info + Form */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Let's Connect</h1>
        <p className="text-base leading-relaxed text-gray-600">
          Have something on your mind? We'd love to hear from you! Whether it's feedback on our blog, collaboration ideas, or just a friendly hello—drop us a message.
          <br /><br />
          At <span className="font-semibold text-orange-500">Meta Blog</span>, we believe in building a community through meaningful conversations. Our team is always ready to engage with curious minds and fellow storytellers.
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" placeholder="Enter your name" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea rows="4" placeholder="What's on your mind?" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          </div>
          <button type="submit" className="bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Contact Image */}
      <div className="w-full md:w-1/2">
        <img src={assets.contact} alt="Contact Us" className="w-full h-auto rounded-xl shadow-lg" />
      </div>
    </div>
  );
};

export default Contact;
