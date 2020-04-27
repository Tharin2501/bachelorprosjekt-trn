import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const SkincareDesktopCard = (props) => {




    return (
        <Container id="jumbo">



            <span className="contest"><h4>{props.stepText}</h4></span>
            <p className="contest">Disse produkten passer perfekt for deg.Klikk på pilene for å se flere produkter</p>

            <div className="inner">

                <Row>
                    <Col>
                        <img className="skincareCaurselMobileCardImage" align="center" src={"https://trnbackend.herokuapp.com" + props.product.image[0].url} alt="Card image cap" />
                    </Col>

                    <Col>
                        <h1 className="whitney">{props.product.ProductName}</h1>
                        <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' ></StarRatings>
                        <h3 className="gotham">{props.product.pris + " kr"}</h3>
                        <h4><b>Beskrivelse</b></h4>
                        <p>{props.product.description}</p>
                    </Col>
                </Row>

                <div className="row justify-content-center">
                    <button type="button" className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                    <Button onClick={() => props.changeStep()}><FontAwesomeIcon icon={faArrowRight} /> Gå til neste steg</Button>
                </div>





            </div>
        </Container>

    );
}


export default SkincareDesktopCard
/*
    <div className="row">
                        <td className="align-text-top"> <h2>Steg 1</h2></td>
                    </div>
*/