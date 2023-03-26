import { useState, useEffect } from 'react'

import Title from './components/Title'

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

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Title/>
      
    </div>
  )
}

export default App;
