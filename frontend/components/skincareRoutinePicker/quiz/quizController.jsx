import React, { useState } from 'react';
import QuizQuestion from "./quizQuestion"
import { Button } from 'reactstrap';
import { NetworkStatus } from 'apollo-client';

const quizData = [
    {
        id: 0,
        question: `Hva er ditt kjønn?`,
        options: [
            { "displayText": "Han", "filters": ["han"] },
            { "displayText": "Hun", "filters": ["hun"] },
            { "displayText": "annet", "filters": ["none"] },
        ],
    },
    {
        id: 1,
        question: `Hva er din alder?`,
        options: [
            { "displayText": "13-25", "filters": ["young"] },
            { "displayText": "26-50", "filters": ["middle"] },
            { "displayText": "Over 50", "filters": ["old"] },
        ],
    },
    {
        id: 2,
        question: `Hva er din hudtype?`,
        options: [
            { "displayText": "tørr", "filters": ["dry"] },
            { "displayText": "fet", "filters": ["thicc"] },
            { "displayText": "normal", "filters": ["boring"] },
        ],
    },
    {
        id: 3,
        question: `Hva ønsker du å oppnå?`,
        options: [
            { "displayText": "redusere linjer", "filters": ["reduceWrinkles"] },
            { "displayText": "redusere akne", "filters": ["avoidAcne"] },
            { "displayText": "mindre tørhet", "filters": ["moisturizer"] },
        ],
    }
];

const QuizController = () => {

    // varibal for om svaret er valgt 
    // så en func for legge det til listen
    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    const [selectedAnswer, setSelectedAnswer] = useState(" ");
    const [currentQustionNumber, setCurrentQuestionNumber] = useState(0);
    const [arrayOfAnswers, setArrayOfAnswers] = useState([]);
    console.log(quizData)
    const handleAnswerButtonPressed = (event) => {
        //console.log(event.target.innerText);

        setSelectedAnswer(event.target.innerText)
    }



    const handleNextButtonPressed = (event) => {
        if (selectedAnswer !== " ") {
            addAnswerToArray(selectedAnswer);
            setSelectedAnswer(" ")
        } else {
            return
        }



        if (currentQustionNumber + 1 < quizData.length) {
            setCurrentQuestionNumber(currentQustionNumber + 1);
        }
    }

    const addAnswerToArray = (newAnswer) => {
        var tempArray = arrayOfAnswers;
        tempArray.push(newAnswer);

        setArrayOfAnswers(tempArray);
    }

    return (
        <div align="center" >
            <QuizQuestion currentQustion={quizData[currentQustionNumber]} handleNextButtonPressed={handleNextButtonPressed} handleAnswerButtonPressed={handleAnswerButtonPressed}></QuizQuestion>

        </div>
    );
};

export default QuizController;