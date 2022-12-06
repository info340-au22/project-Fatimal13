import React, { useState } from "react";

export function Quiz(props) {

    const questions = props.quizData;

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    return (
        <div className="Quiz">

            {showResults ? (
                <div className="final-results">
                    <h1>Quiz Results!</h1>
                    <h2>
                        {score} out of {questions.length} correct - (
                        {Math.round((score / questions.length) * 100)}%)
                    </h2>
                    <h3>
                        Thank you for taking our quiz! Hopefully you were able to gain some valuable insights about native
                        Hawaiian history and culture.
                    </h3>
                    <h4>
                        When Hawai’i was illegally overthrown by the United States in January of 1893, over 1.2 million acres
                        of native land was seized and their monarchy was annexed. The Hawaiian language was banned from being
                        taught in schools, and the colonization of Hawai’i stripped the native population of their culture,
                        traditions, and rightful land. Today, only 20% of Hawai’i’s population is made up by native Hawaiians,
                        and they are still fighting to reestablish their governance and spread their traditional customs (Launiu, 2022).
                        In the early 1970s a renaissance of the Hawaiian culture began to promote native traditions in language, art,
                        dance, and cuisine. Despite the positive impact of this renaissance, the tourism business dominates the Hawaiian
                        economy and people visiting and moving from the mainland has a negative impact on efforts against colonization.
                        Due to this, it is crucial for visitors (like you!) to educate themselves on the history and culture of Hawai’i,
                        and plan their trips around supporting small and locally owned businesses who’s mission aligns with that of
                        the native population.
                    </h4>
                    <button className="quiz-button" onClick={() => restartGame()}>Restart Quiz</button>
                </div>
            ) : (
                <div className="quiz-card">
                    <h1>How Well Do You Know Hawai'i?</h1>
                    <h2>
                        Question: {currentQuestion + 1} out of {questions.length}
                    </h2>
                    <h3>Current Score: {score}</h3>
                    <h4 className="question-text">{questions[currentQuestion].text}</h4>

                    <ul className="quiz-ul">
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li className="quiz-li"
                                    key={option.id}
                                    onClick={() => optionClicked(option.isCorrect)}
                                >
                                    {option.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}



