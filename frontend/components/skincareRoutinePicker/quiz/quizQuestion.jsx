import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
const QuizQuestion = (props) => {
    <head>

    </head>

    // gå til product side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div align="center" >
            <div className="quizContainer">
                <Button onClick={() => cancelSkincarePickerButtonHandler()}> Avbryt</Button>
                <div className={"jumbotron "}>

                    <a href="javascript:void(0)" className="float-right quizCloseButton mx-auto" >&times;</a>
                    <h2 align="center"> {props.currentQustion.question}</h2>
                    {props.currentQustion.options.map((option) => {
                        return (

                            <button key={option.displayText} onClick={event => props.handleAnswerButtonPressed(props.currentQustion.effect, option)} type="button" class="btn btn-dark btn-lg btn-block m-2">{option.displayText}</button>


                        )
                    })
                    }
                    <button onClick={props.handleNextButtonPressed} type="button" className="btn btn-dark m-4 btn-lg"> Neste</button>
                </div>

            </div>

        </div >
    );
};

export default QuizQuestion;