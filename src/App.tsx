import { useState } from 'react'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Archive from './components/Archive'
import Method from './components/Method'
import ProjectDatasheet from './components/ProjectDatasheet'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Manifesto />
      <Archive onSelectProject={setSelectedProject} />
      <Method />
      {selectedProject !== null && (
        <ProjectDatasheet
          projectIndex={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
