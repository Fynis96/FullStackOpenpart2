const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  const total = course.parts.reduce((acc, obj ) => {
    return acc + obj.exercises
  }, 0)
  return (
    <div>
      {course.parts.map(parts => 
          <Part key={parts.id} parts={parts}/>
        )}
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const Part = ({ parts }) => {
  return (
    <p>{parts.name} {parts.exercises}</p>
  )
}

export default Course