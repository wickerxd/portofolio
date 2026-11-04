import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import { about } from '../data/content'
import { reveal } from '../lib/motion'

function About() {
  return (
    <section
      className="section container"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionHeading id="about-title">{about.title}</SectionHeading>
      <motion.div className="about__content" {...reveal}>
        <p className="about__body">{about.body}</p>
        <ul className="about__tags" aria-label="Technologies">
          {about.tagGroups.map((group) => (
            <li key={group.join('-')}>{group.join(' · ')}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default About
