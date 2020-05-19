import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';
const QuizQuestion = (props) => {

    const router = useRouter();
    const cancelSkincarePickerButtonHandler = () => {

        router.push("/");
    }



    // gå til product side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div align="center" >
            <Button onClick={() => cancelSkincarePickerButtonHandler()}> Avbryt</Button>
            <div className="quizContainer">

                <div className={"jumbotron "}>


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