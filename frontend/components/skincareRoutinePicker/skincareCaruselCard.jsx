import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress,
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import SkincareCaruselCardCheckboxList from "./skincareCaruselCardComponents/skincareCaruselCardCheckboxList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'


import { useRouter } from 'next/router'


const SkincareCaruselCard = (props) => {

    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
    const router = useRouter()
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

    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div >
            <Card className="ml-2 shadow-lg p-3 mb-5 bg-white rounded">
                <Progress value={props.progressBarValue}></Progress>
                <text align="center">{props.stepText}</text>
                <img className="skincareCaurselMobileCardImage" align="center" src={"https://trnbackend.herokuapp.com" + props.product.image[0].url} alt="Card image cap" />
                <CardBody>
                    <CardTitle >{props.product.ProductName}</CardTitle>
                    <div className="row px-3 justify-content-between">
                        <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' ></StarRatings>
                        <text>Se omtale</text>
                    </div>




                    <img align="center" src="/images/desktopBulletPointImage.png" alt="Card image cap" />
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
};

export default SkincareCaruselCard;