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
        <div className="contact__intro">
          <h3 className="contact__heading">{contact.heading}</h3>
          <p className="contact__body">{contact.body}</p>
        </div>
        <div className="contact__actions">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>
            <svg
              className="btn__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Say hello <span aria-hidden="true">»</span>
          </a>
          <a
            className="btn btn-outline"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <span aria-hidden="true">»</span>
          </a>
        </div>
        <footer className="contact__footer">
          <span>{contact.location}</span>
          <address>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            github <span aria-hidden="true">»</span>
          </a>
        </footer>
      </motion.div>
    </section>
  )
}

export default Contact
