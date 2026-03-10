import { useState } from 'react'

function Counter() {
  const [students, setStudents] = useState(0)

  const decrease = () => setStudents((value) => Math.max(0, value - 1))
  const increase = () => setStudents((value) => value + 1)

  return (
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
  )
}

export default Counter
