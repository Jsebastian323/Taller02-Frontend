import CourseCard from './CourseCard'

function CourseList({ courses }) {
  return (
    <section id="courses" className="courses">
      <h2>Nuestros Cursos</h2>
      <p className="subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            icon={course.icon}
            title={course.title}
            description={course.description}
            level={course.level}
          />
        ))}
      </div>
    </section>
  )
}

export default CourseList
