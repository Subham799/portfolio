import { forwardRef } from 'react';

const projects = [
  {
    id: 'devconnect',
    title: 'DevConnect Social Platform',
    description: 'Built a developer social platform with user signup/login using JWT. Developed RESTful APIs with Express and connected to MongoDB. Frontend built using React.js with basic component structure.',
    tech: 'MERN Stack',
    link: '#'
  },
  {
    id: 'todolist',
    title: 'To-Do List App',
    description: 'Designed a responsive task manager allowing users to add, delete, and mark tasks completed. Used localStorage for data persistence.',
    tech: 'HTML, CSS, JavaScript',
    link: '#'
  },
  {
    id: 'weather',
    title: 'Weather Tracker',
    description: 'Fetched real-time weather details based on user input and displayed using DOM manipulation.',
    tech: 'HTML, CSS, JavaScript, OpenWeather API',
    link: '#'
  },
  {
    id: 'upcoming',
    title: 'Portfolio Website',
    description: 'This responsive portfolio website showcasing my skills, projects, and experience. Built with modern technologies and clean design.',
    tech: 'React, Tailwind CSS',
    link: '#'
  }
];

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="up_gap section-container section-animate" id="project">
      <h2 className="heading1 text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="completely max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card__content">
                <h1 className="card__header">{project.title}</h1>
                <div className="card__text-wrapper">
                  <p className="card__text">{project.description}</p>
                  <p className="text-primary mt-3 font-medium">{project.tech}</p>
                </div>
                <a
                  href={project.link}
                  className="card__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
