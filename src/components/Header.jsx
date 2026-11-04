import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { navLinks } from '../data/content'

function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.3
      let current = sections[0]?.id ?? 'home'

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        if (sectionTop <= marker) {
          current = section.id
        }
      })

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (isAtBottom) {
        current = sections.at(-1)?.id ?? current
      }

      setActiveSection(current)
    }

    const resizeObserver = new ResizeObserver(updateActiveSection)
    resizeObserver.observe(document.body)

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header className="site-header">
      <motion.span
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <nav className="site-nav container" aria-label="Primary">
        <ul className="site-nav__list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className="site-nav__link"
                href={link.href}
                aria-current={
                  activeSection === link.id ? 'location' : undefined
                }
              >
                <span className="site-nav__prompt" aria-hidden="true">
                  ~/
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
