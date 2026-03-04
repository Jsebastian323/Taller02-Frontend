import { useState } from 'react'

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
  const [students, setStudents] = useState(0)

  const decrease = () => setStudents((value) => Math.max(0, value - 1))
  const increase = () => setStudents((value) => value + 1)

  return (
    <>
      <header className="hero">
        <nav className="navbar">
          <p className="logo">ReactAcademy</p>
          <div className="links">
            <a href="#">Inicio</a>
            <a href="#courses">Cursos</a>
            <a href="#">Nosotros</a>
          </div>
        </nav>
        <section className="hero-content">
          <h1>
            Aprende <span>React</span> desde cero
          </h1>
          <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
          <button>Ver Cursos</button>
        </section>
      </header>

      <main>
        <section id="courses" className="courses">
          <h2>Nuestros Cursos</h2>
          <p className="subtitle">Elige el camino que mejor se adapte a ti</p>
          <div className="course-grid">
            {courses.map((course) => (
              <article key={course.title} className="card">
                <p className="icon">{course.icon}</p>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <span>{course.level}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="counter-section">
          <h2>Cuántos estudiantes van a inscribirse?</h2>
          <p>Usa los botones para ajustar el número</p>
          <div className="counter-box">
            <button onClick={decrease}>−</button>
            <strong>{students}</strong>
            <button onClick={increase}>+</button>
          </div>
          <small>estudiantes inscritos</small>
        </section>
      </main>

      <footer>
        <p>
          © 2026 <span>ReactAcademy</span>. Taller 02 — React Fundamentos.
        </p>
      </footer>
    </>
  )
}

export default App
