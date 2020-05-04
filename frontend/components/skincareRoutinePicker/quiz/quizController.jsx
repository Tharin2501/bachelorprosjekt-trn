import React, { useState } from 'react';
import QuizQuestion from "./quizQuestion"
import SkincareCaruselController from "../skincareCaruselController"
import { useRouter } from 'next/router';
import { Button } from "reactstrap";
import GETQUIZQUESTION_QUERY from "../../../apollo/queries/carusel/GetQuizQuestions"
import Query from "../../query"

const QuizController = () => {

    // varibal for om svaret er valgt 
    // så en func for legge det til listen
    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    const [selectedAnswer, setSelectedAnswer] = useState(" ");
    const [currentQustionNumber, setCurrentQuestionNumber] = useState(0);
    const [arrayOfAnswers, setArrayOfAnswers] = useState([]);
    const [isQuizDone, setIsQuizDone] = useState(false);
    const router = useRouter();
    const handleAnswerButtonPressed = (event) => {

        setSelectedAnswer(event.target.innerText)
    }

    const cancelSkincarePickerButtonHandler = () => {

        router.push("/");
    }

    const handleNextButtonPressed = (event) => {
        if (selectedAnswer !== " ") {
            addAnswerToArray(selectedAnswer);
            setSelectedAnswer(" ")
        } else {
            return
        }



        if (currentQustionNumber + 1 < 4) {
            setCurrentQuestionNumber(currentQustionNumber + 1);
        } else {
            setIsQuizDone(true)
        }
    }

    const addAnswerToArray = (newAnswer) => {
        var tempArray = arrayOfAnswers;
        tempArray.push(newAnswer);

        setArrayOfAnswers(tempArray);
    }

    return (
        <Query query={GETQUIZQUESTION_QUERY}>
            {({ data: { quizdata } }) => {
                console.log(quizdata[0].quizJSONdata);

                return (
                    <div align="center" >
                        <Button onClick={() => cancelSkincarePickerButtonHandler()}> Avbryt</Button>
                        {isQuizDone ? <SkincareCaruselController filtersFromQuizArray={arrayOfAnswers}></SkincareCaruselController> : <QuizQuestion currentQustion={quizdata[0].quizJSONdata[currentQustionNumber]} handleNextButtonPressed={handleNextButtonPressed} handleAnswerButtonPressed={handleAnswerButtonPressed}></QuizQuestion>
                        }

                    </div>
                )
            }}
        </Query>

    );
};

export default QuizController;

