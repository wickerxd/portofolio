import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'
import { reveal } from '../lib/motion'

function ProjectCard({ project }) {
  const isMore = project.kind === 'more'

  return (
    <article
      className={`project-card${isMore ? ' project-card--more' : ' card'}`}
    >
      <p className="project-card__stack">{project.stack}</p>
      <h3 className="project-card__title">
        {project.name}
        {isMore && (
          <span className="project-card__cursor" aria-hidden="true">
            _
          </span>
        )}
      </h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__actions">
        {isMore ? (
          <a
            className="project-card__link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel}
          </a>
        ) : (
          <>
            <a
              className="project-card__link project-card__link--demo"
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open demo for ${project.name}`}
            >
              <span className="project-card__prompt" aria-hidden="true">
                $
              </span>
              <span>open demo</span>
            </a>
            <a
              className="project-card__link"
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View repository for ${project.name}`}
            >
              <span className="project-card__prompt" aria-hidden="true">
                $
              </span>
              <span>view repo</span>
            </a>
          </>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      className="section container"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading id="projects-title">projects</SectionHeading>
      <motion.ul className="projects__grid" {...reveal}>
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Projects
