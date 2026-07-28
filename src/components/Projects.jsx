import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Sudoku Game',
    description: 'Developed a code that solves Sudoku puzzles automatically. It works by trying a number, and if that number causes a problem later, it backtracks and tries another. This taught me how to think through problems logically and write organized, easy-to-follow instructions and skills that help in any job that requires attention to detail.',
    tech: ['Recursion', 'Backtracking algorithms'],
    link: '#',
    github: 'https://github.com/Jenil527',
    image: '/sud.webp'
  },
  {
    title: 'Library Management System',
    description: "Created a system that tracks borrowed books, due dates and late fines. Everything gets saved to a file, so information loss doesn't occur when you close the program. This project helped me understand how real systems handle customer records, transactions and updates without making mistakes.",
    tech: ['File I/O', 'Algorithms'],
    link: '#',
    github: 'https://github.com/Jenil527',
    image: '/lib.webp'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Developed a responsive personal portfolio website to showcase my education, technical skills, projects, work experience, and professional background. Designed and organized the website to provide a clear and user-friendly way for recruiters and employers to learn about my qualifications and view my projects. The project demonstrates my ability to build, structure, and maintain a professional web presence using modern web development practices.',
    tech: ['JavaScript', 'React', 'CSS', 'Vite'],
    link: '#',
    github: 'https://github.com/Jenil527/Jenil527folio',
    image: '/PF.png'
  }
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Some Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass" key={index}>
              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              )}
              <div className="project-content">
                <div className="project-header">
                  <svg className="folder-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="project-links">
                    <a href={project.github} aria-label="GitHub Link">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
