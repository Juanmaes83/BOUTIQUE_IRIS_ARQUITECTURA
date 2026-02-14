import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/VIDEO_IRIS_HEROWEB.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-12 left-12 text-white"
      >
        <p className="text-xs tracking-[0.3em] uppercase font-inter">
          ALTEA · ALICANTE
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
