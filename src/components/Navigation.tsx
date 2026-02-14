import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      <div className="max-w-[1920px] mx-auto flex justify-between items-center">
        <div className="text-white text-sm tracking-[0.2em] font-bold">
          IRIS PROJECTS
        </div>
        <div className="flex gap-12 text-white text-xs tracking-[0.15em]">
          <a href="#manifesto" className="hover:text-iris-gold transition-colors duration-300">
            PHILOSOPHY
          </a>
          <a href="#archive" className="hover:text-iris-gold transition-colors duration-300">
            ARCHIVE
          </a>
          <a href="#method" className="hover:text-iris-gold transition-colors duration-300">
            METHOD
          </a>
          <a href="#contact" className="hover:text-iris-gold transition-colors duration-300">
            CONTACT
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
