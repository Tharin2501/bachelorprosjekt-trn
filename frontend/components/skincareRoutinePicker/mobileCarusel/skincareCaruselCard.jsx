import React, { useState } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress,
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


const SkincareCaruselCard = (props) => {

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
            router.push("/shoppingcart");
        }


    }
    if (props.product.description.length > 150) {
        return (

            <div >
                <Card className="ml-2 shadow-lg p-3 mb-5 bg-white rounded">
                    <Progress value={props.progressBarValue}></Progress>
                    <text align="center">{props.stepText}</text>
                    <img className="MobileSkincareCaurselCardImage" align="center" src={"https://trnbackend.herokuapp.com" + props.product.image[0].url} alt="" />
                    <CardBody>
                        <CardTitle >{props.product.ProductName}</CardTitle>
                        <div className="row px-3 justify-content-between">
                            <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' alt="Fem stjerner hvor tre er fylt inn og to er blanke"></StarRatings>
                            <text>Se omtale</text>
                        </div>




                        <img align="center" src="/images/desktopBulletPointImage.png" alt="En horisontal sjekkliste med fire punkter. Hvor Alkholfri, Silikonfri, Nøttefri er godkjent og Alkholfri er ikke godkjent. " />
                        <CardSubtitle className="h2" align="center">{props.product.pris + " kr"}</CardSubtitle>
                        <button onClick={() => toogleShowText()} type="button" className="btn btn-dark m-4 btn-lg justify-content-center"> Vis beskrivelse</button>
                        {showText && <CardText>{props.product.description}</CardText>}
                        <div className="row px-3 justify-content-between">
                            <button type="button" onClick={() => chooseProductButtonHandler()} className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                            <Button disabled={isNextButtonDisabled} onClick={() => goNextStepButtonHandler()}><FontAwesomeIcon icon={faArrowRight} /></Button>
                        </div>


                    </CardBody>
                </Card>
            </div>

        )
    } else {
        return (
            <div >
                <Card className="ml-2 shadow-lg p-3 mb-5 bg-white rounded">
                    <Progress value={props.progressBarValue}></Progress>
                    <text align="center">{props.stepText}</text>
                    <img className="MobileSkincareCaurselCardImage" align="center" src={"https://trnbackend.herokuapp.com" + props.product.image[0].url} alt="" />
                    <CardBody>
                        <CardTitle >{props.product.ProductName}</CardTitle>
                        <div className="row px-3 justify-content-between">
                            <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' alt="Fem stjerner hvor tre er fylt inn og to er blanke" ></StarRatings>
                            <text>Se omtale</text>
                        </div>




                        <img align="center" src="/images/desktopBulletPointImage.png" alt="En horisontal sjekkliste med fire punkter. Hvor Alkholfri, Silikonfri, Nøttefri er godkjent og Alkholfri er ikke godkjent. " />
                        <CardSubtitle className="h2" align="center">{props.product.pris + " kr"}</CardSubtitle>
                        <CardText>{props.product.description}</CardText>
                        <div className="row px-3 justify-content-between">
                            <button type="button" onClick={() => chooseProductButtonHandler()} className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                            <Button disabled={isNextButtonDisabled} onClick={() => goNextStepButtonHandler()}><FontAwesomeIcon icon={faArrowRight} /></Button>
                        </div>


                    </CardBody>
                </Card>
            </div>
        );
    }
    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>

};

export default SkincareCaruselCard;