import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import SkincareCaruselCardCheckboxList from "./skincareCaruselCardComponents/skincareCaruselCardCheckboxList"



const SkincareCaruselCard = ({ productName }) => {
    <head>
        <link href="../../assets/css/all.min.css" rel="stylesheet"></link>
    </head>

    // gå til produt side i stedenfor se omtale eller vis antall
    return (
        <div >
            <Card className="ml-2 shadow-lg p-3 mb-5 bg-white rounded">
                <Progress value={33, 33}></Progress>
                <text align="center">Steg 1: Rens</text>
                <CardImg top width="100%" src="https://trnbackend.herokuapp.com/files/1279254-trnLargeFormat.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle >{productName}</CardTitle>
                    <div className="row px-3 justify-content-between">
                        <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' ></StarRatings>
                        <text>Se omtale</text>
                    </div>

                    <SkincareCaruselCardCheckboxList></SkincareCaruselCardCheckboxList>
                    <CardSubtitle className="h2" align="center">200kr</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <div className="row px-3 justify-content-between">
                        <button type="button" className="btn btn-info btn-circle btn-xl"> <i className="fas fa-check"></i></button>
                        <Button>Button</Button>
                    </div>


                </CardBody>
            </Card>
        </div>
    );
};

export default SkincareCaruselCard;