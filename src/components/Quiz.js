import React, { useState } from "react";

export function Quiz() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            text: "How many main islands make up the state of Hawaii?",
            options: [
                { id: 0, text: "6", isCorrect: false },
                { id: 1, text: "8", isCorrect: true },
                { id: 2, text: "12", isCorrect: false },
                { id: 3, text: "18", isCorrect: false },
            ],
        },
        {
            text: "Which island is the oldest of the main islands?",
            options: [
                { id: 0, text: "Kauai", isCorrect: true },
                { id: 1, text: "Maui", isCorrect: false },
                { id: 2, text: "Oahu", isCorrect: false },
                { id: 3, text: "Molokai", isCorrect: false },
            ],
        },
        {
            text: "What was Hawaii's original name?",
            options: [
                { id: 0, text: "The Water Islands", isCorrect: false },
                { id: 1, text: "The Volcanic Islands", isCorrect: false },
                { id: 2, text: "The Green Islands", isCorrect: false },
                { id: 3, text: "The Sandwich Islands", isCorrect: true },
            ],
        },
        {
            text: "What is Hawaii famous for?",
            options: [
                { id: 0, text: "Beaches", isCorrect: true },
                { id: 1, text: "Snowy Weather", isCorrect: false },
                { id: 2, text: "Coffee", isCorrect: false },
                { id: 3, text: "Obama", isCorrect: false },
            ],
        },
        {
            text: "Which of the following was invented in Hawaii?",
            options: [
                { id: 0, text: "Swimming", isCorrect: false },
                { id: 1, text: "Surfing", isCorrect: true },
                { id: 2, text: "Scuba Diving", isCorrect: false },
                { id: 3, text: "Mountain Climbing", isCorrect: false },
            ],
        },
        {
            text: "Which popular Hawaiian artifact was historically used to identify rank and the island someone was from?",
            options: [
                { id: 0, text: "Sea shell", isCorrect: false },
                { id: 1, text: "Lei", isCorrect: true },
                { id: 2, text: "Malo & Pa'u", isCorrect: false },
                { id: 3, text: "Hibiscus Flower", isCorrect: false },
            ],
        },
        {
            text: "What does Aloha mean?",
            options: [
                { id: 0, text: "Hello", isCorrect: false },
                { id: 1, text: "Goodbye", isCorrect: false },
                { id: 3, text: "Love and Respect", isCorrect: false },
                { id: 4, text: "Compassion and Mercy", isCorrect: false },
                { id: 5, text: "All of the above", isCorrect: true },
            ],
        },
        {
            text: "What is a lei a symbol for in Hawaii?",
            options: [
                { id: 0, text: "Farewell", isCorrect: false },
                { id: 1, text: "Gratitude", isCorrect: false },
                { id: 2, text: "Welcome and affection", isCorrect: true },
                { id: 3, text: "Hostility", isCorrect: false },
            ],
        },
        {
            text: "How many letters are in the Hawaiian alphabet?",
            options: [
                { id: 0, text: "12", isCorrect: true },
                { id: 1, text: "20", isCorrect: false },
                { id: 2, text: "52", isCorrect: false },
                { id: 3, text: "33", isCorrect: false },
            ],
        },
        {
            text: "Hawaii is the only US state to grow which crop?",
            options: [
                { id: 0, text: "Macadamia Nuts", isCorrect: false },
                { id: 1, text: "Pineapple", isCorrect: false },
                { id: 2, text: "Cacao", isCorrect: false },
                { id: 3, text: "Coffee beans", isCorrect: true },
            ],
        },
        {
            text: "When was Hawai'i's government illegally overthrown by the U.S.?",
            options: [
                { id: 0, text: "1893", isCorrect: true },
                { id: 1, text: "1909", isCorrect: false },
                { id: 2, text: "1862", isCorrect: false },
                { id: 3, text: "1947", isCorrect: false },
            ],
        },
        {
            text: "Who was Hawai'i's first and last queen?",
            options: [
                { id: 0, text: "Queen ", isCorrect: true },
                { id: 1, text: "Queen ", isCorrect: false },
                { id: 2, text: "Queen Lili'uokalani", isCorrect: false },
                { id: 3, text: "Queen ", isCorrect: false },
            ],
        },
    ];

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
            <h1>How Well Do You Know Hawai'i?</h1>

            <h2>Score: {score}</h2>

            {showResults ? (
                <div className="final-results">
                    <h1>Quiz Results!</h1>
                    <h2>
                        {score} out of {questions.length} correct - (
                        {(score / questions.length) * 100}%)
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
                    <h2>
                        Question: {currentQuestion + 1} out of {questions.length}
                    </h2>
                    <h3 className="question-text">{questions[currentQuestion].text}</h3>

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
