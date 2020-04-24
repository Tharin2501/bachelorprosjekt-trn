import React from 'react';
import QuizQuestion from "./quizQuestion"
import { Button } from 'reactstrap';
const QuizController = () => {

    // varibal for om svaret er valgt 
    // så en func for legge det til listen
    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div align="center" >
            <QuizQuestion></QuizQuestion>
            <Button > Neste</Button>
        </div>
    );
};

export default QuizController;