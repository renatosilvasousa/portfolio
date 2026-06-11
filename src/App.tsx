import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { DocumentTitleManager } from './components/DocumentTitleManager'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { NeonCursor } from './components/NeonCursor'
import { Projects } from './components/Projects'
import { ScrollToTop } from './components/ScrollToTop'
import { Skills } from './components/Skills'
import { ActiveSectionProvider } from './context/ActiveSectionContext'
import { ResumeToastProvider } from './context/ResumeToastContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoadDone = useCallback(() => setLoading(false), [])

  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <ResumeToastProvider>
          <DocumentTitleManager />
          {loading && <LoadingScreen onDone={handleLoadDone} />}
          <NeonCursor />

          <div className="relative min-h-svh bg-base">
            <div
              className="hero-glow pointer-events-none fixed inset-0 -z-10"
              aria-hidden
            />
            <a href="#conteudo" className="skip-link">
              Pular para o conteúdo
            </a>
            <Header />
            <ScrollToTop />
            <main id="conteudo" tabIndex={-1}>
              <Hero />
              <div className="section-band">
                <About />
              </div>
              <Skills />
              <div className="section-band">
                <Projects />
              </div>
              <Education />
              <div className="section-band">
                <Contact />
              </div>
            </main>
            <Footer />
          </div>
        </ResumeToastProvider>
      </ActiveSectionProvider>
    </ThemeProvider>
  )
}

export default App
