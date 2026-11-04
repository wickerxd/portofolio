import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import { contact } from '../data/content'
import { reveal } from '../lib/motion'

function Contact() {
  return (
    <section
      className="section section--contact container"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionHeading id="contact-title">{contact.title}</SectionHeading>
      <motion.div className="contact__content" {...reveal}>
        <address className="contact__address">
          <a className="contact__email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </address>
        <ul className="contact__links" aria-label="Social links">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a className="text-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Contact
