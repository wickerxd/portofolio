import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'
import { reveal } from '../lib/motion'

function Skills() {
  return (
    <section
      className="section container"
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionHeading id="skills-title">skills</SectionHeading>
      <motion.ol className="skills__grid" {...reveal}>
        {skills.map((skill) => (
          <li key={skill.number}>
            <article className="skill-card card">
              <p className="skill-card__eyebrow">
                <span className="skill-card__number">{skill.number}</span>
                <span aria-hidden="true"> / </span>
                {skill.slug}
              </p>
              <h3 className="skill-card__title">{skill.title}</h3>
              <p className="skill-card__description">{skill.description}</p>
              <ul
                className="tag-list"
                aria-label={`${skill.title} keywords`}
              >
                {skill.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </motion.ol>
    </section>
  )
}

export default Skills
