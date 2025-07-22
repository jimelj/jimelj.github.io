import React from 'react';

export default function About() {
  return (
    <section className="flex-1 flex items-center justify-center w-full relative z-10 animate-fade-in py-12 md:py-20">
      <div className="bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-3xl flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
        <img
          src="https://github.com/jimelj.png"
          alt="Jimel J. Joseph profile"
          className="rounded-full shadow-lg mb-6 border-4 border-blue-500 object-cover"
          style={{ width: '200px', height: '200px' }}
          loading="lazy"
        />
        <h2 className="text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
          Hi, I'm <span className="font-semibold text-blue-500">Jimel J. Joseph</span> — a passionate full stack web developer who loves building things that make a difference. I thrive on learning new technologies, solving real-world problems, and collaborating with creative people.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          My journey in tech started with a fascination for computers and has grown into a career where I get to turn ideas into reality every day. Whether it's crafting sleek user interfaces, architecting robust backends, or automating workflows, I enjoy every step of the process.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Outside of coding, you'll find me exploring new gadgets, reading about emerging tech trends, or sharing knowledge with the community. I believe in continuous growth, curiosity, and the power of teamwork.
        </p>
        <div className="flex space-x-6 justify-center">
          <a href="https://github.com/jimelj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl">
            <span className="sr-only">GitHub</span>
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jimelj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl">
            <span className="sr-only">LinkedIn</span>
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="mailto:jimel.joseph@gmail.com" className="hover:text-blue-500 text-2xl">
            <span className="sr-only">Email</span>
            <i className="fa fa-envelope-o"></i>
          </a>
        </div>
      </div>
    </section>
  );
} 