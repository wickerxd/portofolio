import { useState } from 'react'
import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import { links, moreProjects, projects } from '../data/content'
import { reveal } from '../lib/motion'

function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <p className="project-card__stack">{project.stack}</p>
      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__description">{project.description}</p>
      <a
        className="project-card__link"
        href={project.href}
        aria-label={`Visit ${project.name} live on Vercel`}
      >
        live on vercel <span aria-hidden="true">»</span>
      </a>
    </article>
  )
}

function Projects() {
  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore ? [...projects, ...moreProjects] : projects

  return (
    <section
      className="section container"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading id="projects-title">projects</SectionHeading>
      <motion.ul className="projects__grid" id="projects-grid" {...reveal}>
        {visibleProjects.map((project, index) => (
          <li key={`${project.name}-${index}`}>
            <ProjectCard project={project} />
          </li>
        ))}
      </motion.ul>
      <div className="projects__actions">
        <button
          className="link-button"
          type="button"
          aria-expanded={showMore}
          aria-controls="projects-grid"
          onClick={() => setShowMore((value) => !value)}
        >
          {showMore ? 'show less' : 'show more'}
          <span
            className={`link-button__chevron${showMore ? ' is-open' : ''}`}
            aria-hidden="true"
          >
            ⌄
          </span>
        </button>
        <a className="text-link" href={links.allRepos}>
          all repos on github <span aria-hidden="true">»</span>
        </a>
      </div>
    </section>
  )
}

export default Projects
