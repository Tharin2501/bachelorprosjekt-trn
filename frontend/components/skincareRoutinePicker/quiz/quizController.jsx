import React, { useState } from 'react';
import QuizQuestion from "./quizQuestion"
import SkincareCaruselController from "../skincareCaruselController"
import { useRouter } from 'next/router';
import { Button } from "reactstrap";
import GETQUIZQUESTION_QUERY from "../../../apollo/queries/carusel/GetQuizQuestions"
import Query from "../../query"

const QuizController = () => {

    var filterAnswersArrays = {
        cleanseArray: [],
        tonerArray: [],
        moistzerierArray: []
    }
    // varibal for om svaret er valgt 
    // så en func for legge det til listen
    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    const [selectedAnswer, setSelectedAnswer] = useState(" ");
    const [currentQustionNumber, setCurrentQuestionNumber] = useState(0);
    const [filterArrays, setfilterArrays] = useState(filterAnswersArrays);
    const [isQuizDone, setIsQuizDone] = useState(false);
    const router = useRouter();




    const handleAnswerButtonPressed = (listsToEffect, optionChosen) => {
        var selectedAnswer = { listsToEffect, optionChosen };
        setSelectedAnswer(selectedAnswer);


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

        for (let i = 0; i < newAnswer.listsToEffect.length; i++) {

            if (newAnswer.listsToEffect[i] === "moisturizer") {
                var temparrys = filterArrays;

                for (let i = 0; i < newAnswer.optionChosen.filters.length; i++) {
                    temparrys.moistzerierArray.push(newAnswer.optionChosen.filters[i]);
                }

                setfilterArrays(temparrys)
                continue;
            }

            if (newAnswer.listsToEffect[i] === "toner") {

                var temparrys = filterArrays;

                for (let i = 0; i < newAnswer.optionChosen.filters.length; i++) {
                    temparrys.tonerArray.push(newAnswer.optionChosen.filters[i]);
                }

                setfilterArrays(temparrys)
                continue;
            }

            if (newAnswer.listsToEffect[i] === "cleanser") {
                var temparrys = filterArrays;
                for (let i = 0; i < newAnswer.optionChosen.filters.length; i++) {
                    temparrys.cleanseArray.push(newAnswer.optionChosen.filters[i]);
                }

                setfilterArrays(temparrys)
                continue;
            }
        }
    }

    return (
        <Query query={GETQUIZQUESTION_QUERY}>
            {({ data: { quizdata } }) => {

                return (
                    <div  >

                        <div className={"container-fluid "} id="background">
                            {isQuizDone ? <SkincareCaruselController filtersFromQuizArray={filterArrays}></SkincareCaruselController> : <QuizQuestion currentQustion={quizdata[0].quizJSONdata[currentQustionNumber]} handleNextButtonPressed={handleNextButtonPressed} handleAnswerButtonPressed={handleAnswerButtonPressed}></QuizQuestion>
                            }
                        </div>

                    </div>
                )
            }}
        </Query>

    );
};

export default QuizController;



