import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-2 text-redAccent">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      View Project
    </a>
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="py-16 bg-darkAlt text-white">
    <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
      <Project
        title="Git Hub Projects"
        description="A modern, responsive portfolio website to showcase my work."
        link="https://github.com/muhammad1abbasi"
      />
      
      <Project
        title="Resume Builder"
        description="An interactive tool for creating professional resumes online."
        link="https://hakathone-milestone-5.vercel.app/"
      />
      
      <Project
        title="E-commerce Store"
        description="A fully functional e-commerce site with payment integration."
        link="https://yourecommerce.com"
      />

<Project
        title="My Vercel Projects"
        description="A fully functional e-commerce site with payment integration."
        link="https://vercel.com/muhammad-s-projects-125b7fec"
      />
    </div>
  </section>
);

export default Projects;
