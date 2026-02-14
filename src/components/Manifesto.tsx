import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Manifesto = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="manifesto"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-8 py-32 bg-iris-bg"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs tracking-[0.3em] mb-12 text-iris-gold"
        >
          PHILOSOPHY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="narrative-text text-4xl md:text-5xl lg:text-6xl leading-[1.5] mb-8"
        >
          Architecture is the intersection of precision and poetry
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="narrative-text text-2xl md:text-3xl leading-[1.5] text-iris-text/70 max-w-4xl mx-auto"
        >
          Every line drawn is a dialogue between form and function,
          where the Mediterranean light becomes our co-author,
          and spatial narrative unfolds in silence
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Manifesto
