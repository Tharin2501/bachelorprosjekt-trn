import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
const QuizQuestion = (props) => {
    <head>

    </head>

    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div align="center">
            <Container className="quizQuestionContainer">
                <h2 align="center"> {props.currentQustion.question}</h2>
                {props.currentQustion.options.map((option) => {
                    return (
                        <Button onClick={event => props.handleAnswerButtonPressed(props.currentQustion.effect, option)} color="secondary" size="lg" block>{option.displayText}</Button>
                    )
                })
                }

            </Container>
            <Button onClick={props.handleNextButtonPressed}> Neste</Button>
        </div>
    );
};

export default QuizQuestion;