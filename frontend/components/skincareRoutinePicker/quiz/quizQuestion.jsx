import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
const QuizQuestion = (props) => {
    <head>

    </head>

    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div align="center">
            <Container className="quizQuestionContainer">
                <h2 align="center"> Hva heter du ?</h2>
                <Button color="secondary" size="lg" block>Lars</Button>
                <Button color="secondary" size="lg" block>Karsten</Button>
                <Button color="secondary" size="lg" block>Bernie</Button>
                <Button onClick={event => props.handleNextButtonPressed(event)} color="secondary" size="lg" block>Vil ikke oppggi</Button>

            </Container>
            <Button onClick={props.handleNextButtonPressed} > Neste</Button>
        </div>
    );
};

export default QuizQuestion;