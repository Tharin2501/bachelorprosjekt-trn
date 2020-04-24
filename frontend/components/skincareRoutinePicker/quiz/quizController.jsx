import React from 'react';
import QuizQuestion from "./quizQuestion"
import { Button } from 'reactstrap';
const QuizController = () => {

    // varibal for om svaret er valgt 
    // så en func for legge det til listen
    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    var tempanswer;

    const handleNextButtonPressed = (event) => {
        console.log(event.target.innerText)


    }
    return (
        <div align="center" >
            <QuizQuestion handleNextButtonPressed={handleNextButtonPressed}></QuizQuestion>

        </div>
    );
};

export default QuizController;