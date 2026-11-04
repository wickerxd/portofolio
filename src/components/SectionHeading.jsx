import { motion } from 'motion/react'
import { reveal } from '../lib/motion'

function SectionHeading({ id, children }) {
  return (
    <motion.h2 className="section__heading" id={id} {...reveal}>
      <span className="section__marker" aria-hidden="true">
        ##
      </span>
      {children}
    </motion.h2>
  )
}

export default SectionHeading
