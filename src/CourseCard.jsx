function CourseCard({ icon, title, description, level }) {
  return (
    <article className="card">
      <p className="icon">{icon}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{level}</span>
    </article>
  )
}

export default CourseCard
