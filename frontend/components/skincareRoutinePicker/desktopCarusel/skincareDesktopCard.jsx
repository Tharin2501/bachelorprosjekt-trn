import React, { useState } from "react"
import {
    Button, Container, Row, Col, Progress
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
const SkincareDesktopCard = (props) => {

    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
    const [showText, setShowText] = useState(false);
    const router = useRouter()

    const toogleShowText = () => {
        setShowText(!showText)
    }

    const chooseProductButtonHandler = () => {

        props.addToChosenProdutsArrayFunction(props.product);
        setIsNextButtonDisabled(false);
    }


    const goNextStepButtonHandler = () => {
        props.changeStep();
        if (props.stepNumber === 3) {
            props.addChosenProductsToCart();
            console.log("inside")
            router.push("/shoppingcart");
        }


    }


    if (props.product.description.length > 201) {
        return (
            <Container id="jumbo">
                <Progress value={props.progressBarValue}></Progress>
                <span className="contest"><h4>{props.stepText}</h4></span>
                <p className="contest">Disse produkten passer perfekt for deg. Klikk på pilene for å se flere produkter</p>

                <div className="inner">

                    <Row>
                        <Col>
                            <img className="DesktopSkincareCaurselCardImage" align="center" src={"https://trnbackend.herokuapp.com" + props.product.image[0].url} alt="" />
                        </Col>

                        <Col>
                            <h1 className="whitney">{props.product.ProductName}</h1>
                            <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' alt="Fem stjerner hvor tre er fylt inn og to er blanke"></StarRatings>
                            <h3 className="gotham">Pris: {props.product.pris + " kr"}</h3>
                            <img align="center" className="desktopBulletpointImage" src="/images/desktopBulletPointImage.png" alt="En horisontal sjekkliste med fire punkter. Hvor Alkholfri, Silikonfri, Nøttefri er godkjent og Alkholfri er ikke godkjent. " />

                            <h4><b>Beskrivelse</b></h4>
                            <Button onClick={() => toogleShowText()} >Vis beskrivelse</Button>
                            <div className="desktopBulletpointImage">
                                {showText && <p>{props.product.description}</p>}
                            </div>

                        </Col>
                    </Row>

                    <div className="row justify-content-center desktopCardButtons">
                        <button type="button" onClick={() => chooseProductButtonHandler()} className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                        <Button disabled={isNextButtonDisabled} onClick={() => goNextStepButtonHandler()}><FontAwesomeIcon icon={faArrowRight} /> {props.goToNextStepButtonText}</Button>
                    </div>





                </div>
            </Container>

        )
    }
    return (
        <Container id="jumbo">
            <Progress value={props.progressBarValue}></Progress>
            <span className="contest"><h4>{props.stepText}</h4></span>
            <p className="contest">Disse produkten passer perfekt for deg. Klikk på pilene for å se flere produkter</p>

            <div className="inner">

                <Row>
                    <Col>
                        <img className="DesktopSkincareCaurselCardImage" align="center" src={"https://trnbackend.herokuapp.com" + props.product.image[0].url} alt="" />
                    </Col>

                    <Col>
                        <h1 className="whitney">{props.product.ProductName}</h1>
                        <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' alt="Fem stjerner hvor tre er fylt inn og to er blanke" ></StarRatings>
                        <h3 className="gotham">Pris: {props.product.pris + " kr"}</h3>
                        <img align="center" className="desktopBulletpointImage" src="/images/desktopBulletPointImage.png" alt="En horisontal sjekkliste med fire punkter. Hvor Alkholfri, Silikonfri, Nøttefri er godkjent og Alkholfri er ikke godkjent. " />

                        <h4><b>Beskrivelse</b></h4>
                        <div className="desktopBulletpointImage">
                            <p>{props.product.description}</p>
                        </div>
                    </Col>
                </Row>

                <div className="row justify-content-center desktopCardButtons">
                    <button type="button" onClick={() => chooseProductButtonHandler()} className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                    <Button disabled={isNextButtonDisabled} onClick={() => goNextStepButtonHandler()}><FontAwesomeIcon icon={faArrowRight} /> {props.goToNextStepButtonText}</Button>
                </div>





            </div>
        </Container>
    );
}


export default SkincareDesktopCard
