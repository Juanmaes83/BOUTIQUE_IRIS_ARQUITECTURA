import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    image: '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO1.png',
    title: 'Villa Mediterranea',
  },
  {
    id: 2,
    image: '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO2.png',
    title: 'Casa Minimalista',
  },
  {
    id: 3,
    image: '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO3.jpeg',
    title: 'Residencia Coastal',
  },
  {
    id: 4,
    image: '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO4.jpeg',
    title: 'Estudio de Arquitectura',
  },
]

interface ArchiveProps {
  onSelectProject: (index: number) => void
}

const Archive = ({ onSelectProject }: ArchiveProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section
      id="archive"
      ref={ref}
      className="min-h-screen px-8 py-32 bg-iris-bg"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-[1920px] mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] mb-16 text-iris-gold"
        >
          THE ARCHIVE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onSelectProject(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                className={`absolute inset-0 bg-iris-text/80 transition-opacity duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="10%"
                    y1="20%"
                    x2="90%"
                    y2="20%"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="10%"
                    y1="50%"
                    x2="90%"
                    y2="50%"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="10%"
                    y1="80%"
                    x2="90%"
                    y2="80%"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="20%"
                    y1="10%"
                    x2="20%"
                    y2="90%"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="50%"
                    y1="10%"
                    x2="50%"
                    y2="90%"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="80%"
                    y1="10%"
                    x2="80%"
                    y2="90%"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <text
                    x="15%"
                    y="25%"
                    fill="white"
                    fontSize="10"
                    fontFamily="JetBrains Mono"
                  >
                    12.5m
                  </text>
                  <text
                    x="55%"
                    y="85%"
                    fill="white"
                    fontSize="10"
                    fontFamily="JetBrains Mono"
                  >
                    8.2m
                  </text>
                  <circle cx="20%" cy="20%" r="3" fill="white" />
                  <circle cx="80%" cy="80%" r="3" fill="white" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-cormorant mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white text-xs tracking-[0.2em]">
                      VIEW PROJECT
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Archive
