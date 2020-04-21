import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress,
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import SkincareCaruselCardCheckboxList from "./skincareCaruselCardComponents/skincareCaruselCardCheckboxList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'



const SkincareCaruselCard = ({ productName }) => {
    <head>

    </head>

    // gå til produt side i stedenfor se omtale eller vis antall  <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
    return (
        <div >
            <Card className="ml-2 shadow-lg p-3 mb-5 bg-white rounded">
                <Progress value={33, 33}></Progress>
                <text align="center">Steg 1: Rens</text>
                <img className="skincareCaurselMobileCardImage" align="center" src="https://trnbackend.herokuapp.com/files/1279254-trnLargeFormat.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle >{productName}</CardTitle>
                    <div className="row px-3 justify-content-between">
                        <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' ></StarRatings>
                        <text>Se omtale</text>
                    </div>





                    <CardSubtitle className="h2" align="center">200kr</CardSubtitle>
                    <CardText>Some quick example text to build on the card title,</CardText>
                    <div className="row px-3 justify-content-between">
                        <button type="button" className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                        <Button><FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>


                </CardBody>
            </Card>
        </div>
    );
};

export default SkincareCaruselCard;