import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const   Quiz = () => {
   

    const [CurrentQuestions, setCurrentQuestions] = useState(0)
    const [showScore, setshowScore] = useState(false)
    const [score, setscore] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0);


    const result = [
        {
            levelA: 1,
            levelB: 5,
            title: "Very-Flourishing"
        },
        {
            levelA: 5.1,
            levelB: 10,
            title: "Flourishing"
        },
        {
            levelA: 10.1,
            levelB: 15,
            title: "coping well"
        },
        {
            levelA: 15.1,
            levelB: 20,
            title: "Coping"
        },    {
            levelA: 20.1,
            levelB: 25,
            title: "Struggling "
        },    {
            levelA: 25.1,
            levelB: 30,
            title: "Struggling greatly"
        }
        
    ]
    //questions
    const allQuestions = [{
        text: "How often did you feel tired out for no reason?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },

    {
        text: "How often did you feel nervous?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },

    {
        text: "How often did you feel so nervous that nothing could calm you down?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },

    {
        text: "How often did you feel hopeless?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },

    {
        text: "How often did you feel restless or fidgety?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },

    {
        text: "How often did you feel so restless you could not sit still?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },
    {
        text: "How often did you feel depressed?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },
    {
        text: "How often did you feel that everything was an effort?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },
    {
        text: "How often did you feel so sad that nothing could cheer you up?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },
    {
        text: "How often did you feel worthless?",
        options: [
            { answerText: "None of the time", isCorrect: true, weight: 1 },
            { answerText: "little of time ", isCorrect: false, weight: 1.5 },
            { answerText: "some of the time", isCorrect: false, weight: 2 },
            { answerText: "Most of the time", isCorrect: false, weight: 2.5 },
            { answerText: "All of the time", isCorrect: false, weight: 3 },
        ],
    },
    ]
    const handleAnswerOptions = (weight) => {

        setscore(score + weight);
        const handleNextQuestion = CurrentQuestions + 1;
        if (handleNextQuestion < allQuestions.length) {
            setCurrentQuestions(handleNextQuestion);
        } else {
            setshowScore(true);
            calculateTotalWeight();

        }
    }
    const calculateTotalWeight = () => {
        const total = allQuestions.reduce((acc, question) => acc + question.options.reduce((optionAcc, option) => optionAcc + option.weight, 0), 0);
        setTotalWeight(total);
    };
    useEffect(()=>{
        window.scrollTo(0, 0);
    
      },[])
    return (
        <div className='flex w-full h-screen justify-center mt-5 '>
            <div className='bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl h-full  max-h-xl'>
                {
                    showScore ? (
                        <> <div className='text-slate-700 text xl  font-semibold'>you scored {score} 

                        </div>
                        <div className='flex flex-col mt-5'>

                {
                    showScore && result.map((item) => {
                        return (
                            <div className='flex flex-row mt-5'>
                                <p className={score >= item.levelA && score <= item.levelB && "bg-gray-400 text-white"}> {item.levelA} - {item.levelB} </p>
                                <p className={score >= item.levelA && score <= item.levelB && "bg-gray-400 text-white"}> -----</p>
                                <p className={score >= item.levelA && score <= item.levelB && "bg-gray-400 text-white"}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
                            <br></br>
                            <button className='m-2 h-10 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl translate-all duration-500'><Link to={"/therapy"}> therapy</Link></button>

                        </>
                    ) : (
                        <> <div className='text-slate-700 text-xl font-semibold'>
                        </div>

                            <div className='m-4'>
                                <span>Question {CurrentQuestions + 1}</span>/{allQuestions.length}
                            </div>

                            <div className='m-4'>
                                {allQuestions[CurrentQuestions].text}
                            </div>

                            <div className='w-full'>
                                {
                                    allQuestions[CurrentQuestions].options.map((options) => (

                                        <button className='m-4 h-30 flex flex-row mt-5 w-60 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl 
              translate-all duration-500 ease-in-out'onClick={() => handleAnswerOptions(options.weight)}>{options.answerText} </button>
                                    ))
                                }
                            </div>
                        </>
                    )
                }

            </div>
            
        </div>
    )
}

export default Quiz