import React from 'react';

const QuizData = [
    {
        id: 1,
        question: `What is the type of your trip?`,
        options: [`Family Vacation`, `Romance`, `Friends`, `Solo Trips`],
    },
    {
        id: 2,
        question: `How many days are you looking to stay?`,
        options: [`1-3`, `4-7`, `7-14`],

    },

    {
        id: 3,
        question: `Will you have a car?`,
        options: [`Yes`, 'No'],
    },

    {
        id: 4,
        question: `What do you enjoy the most?`,
        options: [`Fine dinning & accomadation`, `Outdoor adventures`, `Indoor activities`, `Cultural Immersion`],
    }
]


export function QuizPage(props) {
    const outputs = QuizData.map((questionObj, index) => {
        const element = (
            <div>
                <label> {questionObj.question}
                    <ul>
                        <input key={questionObj.id[index]} type="radio" value={questionObj.options[index]} > {questionObj.options[index]}</input>
                        <input key={questionObj.id[index]} type="radio" value={questionObj.options[index]} > {questionObj.options[index]}</input>
                        {/* <input key={questionObj.id[2]} type="radio"  value={questionObj.options[2]} > {questionObj.options[2]}</input>
                        <input key={questionObj.id[3]} type="radio" value={questionObj.options[3]} > {questionObj.options[3]}</input> */}
                    </ul>
                </label>
            </div>
        )
        console.log(element);
        return element;
    })


    return (
        <div>
            <header>
                <h1>QUIZ PAGE</h1>
            </header>
            <main>
                <h2> Take this quiz to find out which island to go!</h2>
                <div className="input-group">
                    {outputs}
                </div>
            </main>
        </div>
    )
}
