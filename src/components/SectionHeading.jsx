import { motion } from 'motion/react'
import { reveal } from '../lib/motion'

function SectionHeading({ id, children }) {
  const sectionId = id.replace(/-title$/, '')

  return (
    <motion.h2 className="section__heading" id={id} {...reveal}>
      <a
        className="section__anchor"
        href={`#${sectionId}`}
        title={`Link to ${children}`}
      >
        <span className="section__marker" aria-hidden="true">
          ##
        </span>
        <span>{children}</span>
        <span className="section__hash" aria-hidden="true">
          #
        </span>
      </a>
    </motion.h2>
  )
}

export default SectionHeading
