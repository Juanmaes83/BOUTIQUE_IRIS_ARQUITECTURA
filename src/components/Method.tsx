import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const methods = [
  {
    number: '01',
    title: 'CONCEPT',
    description:
      'We begin by understanding the site, the light, and the narrative. Every project starts with a question: how should this space feel?',
  },
  {
    number: '02',
    title: 'BLUEPRINT',
    description:
      'Precision meets creativity. Technical drawings transform abstract ideas into buildable geometry, where every measurement carries intention.',
  },
  {
    number: '03',
    title: 'CONSTRUCTION',
    description:
      'From paper to reality. We oversee the execution with meticulous attention, ensuring the built form honors the original vision.',
  },
]

const Method = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="method"
      ref={ref}
      className="relative min-h-screen flex items-center px-8 py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-iris-text">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/VIDEO_IRIS_METODOLOGIA.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-iris-text/60" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] mb-20 text-iris-gold"
        >
          THE METHOD
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {methods.map((method, index) => (
            <motion.div
              key={method.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="relative"
            >
              <div className="technical-text text-iris-gold text-6xl mb-6 gold-number">
                {method.number}
              </div>
              <h3 className="text-white text-xl mb-6 tracking-[0.2em]">
                {method.title}
              </h3>
              <p className="narrative-text text-white/80 text-lg leading-[1.5]">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
