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
      <div className="about__layout">
        <div className="about__main">
          <SectionHeading id="about-title">{about.title}</SectionHeading>
          <motion.p className="about__body" {...reveal}>
            {about.body}
          </motion.p>
        </div>
        <motion.div className="about__stack" {...reveal}>
          <h3 className="about__stack-title">Tech stack</h3>
          <dl className="about__stack-list">
            {about.techStack.map((item) => (
              <div className="about__stack-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}

export default About
