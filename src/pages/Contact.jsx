import React from 'react';

export default function Contact() {
  return (
    <section className="flex-1 flex items-center justify-center w-full relative z-10 animate-fade-in py-12 md:py-20">
      <div className="bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-xl flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 backdrop-blur-lg">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400 text-center">Contact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center">I'd love to hear from you! Fill out the form below or connect with me on social media.</p>
        <div className="flex space-x-8 justify-center mb-8">
          <a href="https://github.com/jimelj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-3xl" aria-label="GitHub">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jimelj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-3xl" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <form action="https://formspree.io/f/xovlejzr" method="POST" className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col gap-4 w-full">
          <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <textarea name="message" placeholder="Your Message" rows={5} className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <button type="submit" className="main-btn mt-2">Send Message</button>
        </form>
      </div>
    </section>
  );
} 