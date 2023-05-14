import QuestionBlock from './QuestionBlock'

// Add manual index id's as key if question list will be filtered, changed, or reordered

const QuestionsBlock = ({ quizItem, setChosenAnswerItems }) => {
    console.log(quizItem)
    return (
        <>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container">
                {quizItem.questions.map((question, _index) => (
                    <QuestionBlock
                        key={_index}
                        question={question}
                        setChosenAnswerItems={setChosenAnswerItems}
                    />
                ))}
            </div>
        </>
    )
}

export default QuestionsBlock