import React from 'react';
import { projects } from '../projects';

export default function Portfolio() {
  return (
    <section className="flex-1 flex items-center justify-center w-full relative z-10 animate-fade-in py-12 md:py-20">
      <div className="bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-4xl flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">Portfolio</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {projects.map((project) => (
            <div key={project.repo} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-start border border-gray-100 dark:border-gray-700 transition hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 