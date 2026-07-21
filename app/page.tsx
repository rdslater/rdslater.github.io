import React from 'react';

// Mock data for your AI projects - update these with your actual work!
const projects = [
  {
    title: "Model Serving for Imaging Database",
    description: "Proof of Concept to allow Flywheel to utilize external GPU resources",
    tech: ["Python", "Flywheel", "FastAPI", "Docker"],
    link: "https://github.com/rdslater/fw_model_serving"
  },
  {
    title: "SMU Lecture Notebook",
    description: "Python Notebooks used while teaching Master's Level Data Science",
    tech: ["PyTorch", "Python", "Scikit-Learn"],
    link: "https://github.com/rdslater/SMU"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-24 px-6 pb-16 border-b border-slate-800">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Robert D Slater
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-2xl">
          AI Scientist & Developer. Building intelligent systems, Medical Computer Vision solutions, and automated workflows.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/rdslater" className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg hover:border-teal-400 transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href="#projects" className="px-4 py-2 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors text-sm font-medium">
            View Projects
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <main id="projects" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 mb-8">
          Selected AI Work
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono bg-slate-800 text-teal-400 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                  View Repository →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-12 px-6 border-t border-slate-950 text-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} RD Slater. Built with Next.js and deployed via GitHub Actions.</p>
      </footer>

    </div>
  );
}
