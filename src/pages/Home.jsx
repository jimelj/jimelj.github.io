import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex-1 flex items-center justify-center w-full relative z-10 animate-fade-in py-12 md:py-20">
      <div className="bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
          <span className="uppercase tracking-widest text-xs text-blue-500 dark:text-blue-400 font-semibold mb-2">Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-blue-600 dark:text-blue-400 drop-shadow-lg tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>Hi, I'm Jimel!</h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-700 dark:text-gray-200 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>Web Developer. Problem Solver. Tech Enthusiast.</p>
          <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-xl" style={{fontFamily: 'Inter, sans-serif'}}>
            I build modern, user-focused web applications and love turning ideas into reality. Explore my work, learn more about me, or get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <Link to="/portfolio" className="px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400" style={{fontFamily: 'Inter, sans-serif'}}>View Portfolio</Link>
            <Link to="/contact" className="px-10 py-4 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg shadow hover:bg-blue-50 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800" style={{fontFamily: 'Inter, sans-serif'}}>Contact Me</Link>
          </div>
      </div>
    </section>
  );
} 