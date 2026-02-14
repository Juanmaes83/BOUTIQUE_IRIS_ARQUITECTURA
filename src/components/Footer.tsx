import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-8 py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/BOUTIQUE_IRIS_ARQUITECTURA_CONTACTO.jpeg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-iris-text/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs tracking-[0.3em] mb-12 text-iris-gold"
        >
          CONTACT
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white space-y-8"
        >
          <h3 className="text-5xl md:text-6xl font-cormorant mb-12">
            Let's create something timeless
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-sm tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-iris-gold" />
              <span>Altea, Alicante</span>
            </div>
            <span className="hidden md:inline text-iris-gold">•</span>
            <a
              href="tel:+34629554870"
              className="hover:text-iris-gold transition-colors duration-300"
            >
              +34 629 55 48 70
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-white/50 text-xs tracking-[0.2em]">
          IRIS PROJECTS © 2024
        </p>
      </motion.div>
    </section>
  )
}

export default Footer
