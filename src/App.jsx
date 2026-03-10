import Navbar from './Navbar'
import Hero from './Hero'
import CourseList from './CourseList'
import Counter from './Counter'
import Footer from './Footer'

const courses = [
  {
    icon: '⚛️',
    title: 'React Básico',
    description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    level: 'Principiante'
  },
  {
    icon: '↪️',
    title: 'React Hooks',
    description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    level: 'Intermedio'
  },
  {
    icon: '🗂️',
    title: 'Estado Global',
    description: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    level: 'Intermedio'
  },
  {
    icon: '🚀',
    title: 'React Avanzado',
    description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    level: 'Avanzado'
  }
]

function App() {
  return (
    <>
      <header className="hero">
        <Navbar />
        <Hero />
      </header>

      <main>
        <CourseList courses={courses} />
        <Counter />
      </main>

      <Footer />
    </>
  )
}

export default App
