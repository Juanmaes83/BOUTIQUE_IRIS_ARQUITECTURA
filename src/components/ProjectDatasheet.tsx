import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'Villa Mediterranea',
    year: '2023',
    location: 'Altea, Alicante',
    area: '485',
    architect: 'Iris Projects',
    status: 'Completed',
    images: [
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO1.png',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO2.png',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO3.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Casa Minimalista',
    year: '2024',
    location: 'Benidorm, Alicante',
    area: '320',
    architect: 'Iris Projects',
    status: 'In Progress',
    images: [
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO2.png',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO1.png',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO4.jpeg',
    ],
  },
  {
    id: 3,
    title: 'Residencia Coastal',
    year: '2023',
    location: 'Calpe, Alicante',
    area: '620',
    architect: 'Iris Projects',
    status: 'Completed',
    images: [
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO3.jpeg',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO4.jpeg',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO1.png',
    ],
  },
  {
    id: 4,
    title: 'Estudio de Arquitectura',
    year: '2024',
    location: 'Altea, Alicante',
    area: '180',
    architect: 'Iris Projects',
    status: 'Concept',
    images: [
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO4.jpeg',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO3.jpeg',
      '/BOUTIQUE_IRIS_ARQUITECTURA_PROYECTO2.png',
    ],
  },
]

interface ProjectDatasheetProps {
  projectIndex: number
  onClose: () => void
}

const ProjectDatasheet = ({ projectIndex, onClose }: ProjectDatasheetProps) => {
  const project = projectsData[projectIndex]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-iris-text"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-50 text-white hover:text-iris-gold transition-colors duration-300"
        >
          <X size={32} />
        </button>

        <div className="h-screen flex flex-col lg:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5 lg:sticky lg:top-0 lg:h-screen p-12 lg:p-16 flex flex-col justify-center bg-iris-text border-r border-white/10"
          >
            <div className="technical-text space-y-8">
              <div>
                <h1 className="text-white text-4xl font-cormorant mb-8">
                  {project.title}
                </h1>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-white/50 text-xs tracking-[0.2em] mb-2">
                    YEAR
                  </div>
                  <div className="text-iris-gold text-2xl gold-number">
                    {project.year}
                  </div>
                </div>

                <div>
                  <div className="text-white/50 text-xs tracking-[0.2em] mb-2">
                    LOCATION
                  </div>
                  <div className="text-white text-lg">{project.location}</div>
                </div>

                <div>
                  <div className="text-white/50 text-xs tracking-[0.2em] mb-2">
                    TOTAL AREA
                  </div>
                  <div className="text-iris-gold text-2xl gold-number">
                    {project.area} m²
                  </div>
                </div>

                <div>
                  <div className="text-white/50 text-xs tracking-[0.2em] mb-2">
                    LEAD ARCHITECT
                  </div>
                  <div className="text-white text-lg">{project.architect}</div>
                </div>

                <div>
                  <div className="text-white/50 text-xs tracking-[0.2em] mb-2">
                    CONSTRUCTION STATUS
                  </div>
                  <div className="text-iris-gold text-2xl gold-number">
                    {project.status}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-3/5 overflow-y-auto p-8 lg:p-16 space-y-12"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="w-full"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectDatasheet
