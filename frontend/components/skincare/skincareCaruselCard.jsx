import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SkincareCaruselCard = ({ productName }) => {
    return (
        <div >
            <Card className="ml-2">
                <CardImg top width="100%" src="https://trnbackend.herokuapp.com/files/1279254-trnLargeFormat.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{productName}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default SkincareCaruselCard;