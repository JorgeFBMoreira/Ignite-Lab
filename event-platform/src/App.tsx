import { gql, useQuery } from "@apollo/client"

// GQL - Cria um syntax highlight na query
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string,
  title: string,
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {
        data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })
      }
    </ul>
  )
}

export default App
