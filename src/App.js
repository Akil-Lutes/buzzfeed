import { useState, useEffect } from 'react'
import Title from './components/Title'
import QuestionsBlock from './components/QuestionsBlock'

const App = () => {
  const [quiz, setQuiz] = useState(false)


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz')
      const json = await response.json()
      console.log(json)
      // Overriding the value of false in useState
      setQuiz(json)

    } catch (err) {
      console.log(err)
    }
  }
// Runs until I get the data back
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
       {/* If quiz exists, then get content and map each content item to the questions block */}
      {quiz && quiz?.content.map(contentItem => (
        <QuestionsBlock
          key={contentItem.id}
          quizItem={contentItem} />
        ))}
    </div>
  )
}

export default App;
