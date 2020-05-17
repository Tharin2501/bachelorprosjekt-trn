import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
const QuizQuestion = (props) => {
    <head>

    </head>

    // gå til product side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div align="center" >
            <div className="">
                <Button onClick={() => cancelSkincarePickerButtonHandler()}> Avbryt</Button>
                <div className={"jumbotron "}>
                    <h2 align="center"> {props.currentQustion.question}</h2>
                    {props.currentQustion.options.map((option) => {
                        return (
                            <Button key={option.displayText} onClick={event => props.handleAnswerButtonPressed(props.currentQustion.effect, option)} color="secondary" size="lg" block>{option.displayText}</Button>
                        )
                    })
                    }
                    <Button onClick={props.handleNextButtonPressed}> Neste</Button>
                </div>

            </div>

        </div >
    );
};

export default QuizQuestion;