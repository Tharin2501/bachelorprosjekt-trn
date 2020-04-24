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



            <span className="contest"><h4>Steg 1:Rens</h4></span>
            <p className="contest">Disse produkten passer perfekt for deg.Klikk på pilene for å se flere produkter</p>

            <div className="inner">

                <Row>
                    <Col>
                        <img className="skincareCaurselMobileCardImage" align="center" src="https://trnbackend.herokuapp.com/files/1279254-trnLargeFormat.jpg" alt="Card image cap" />
                    </Col>

                    <Col>
                        <h1 className="whitney">Ole Henriksen green tea Toner</h1>
                        <StarRatings starDimension="20px" rating={3} starRatedColor="black" numberOfStars={5} name='rating' ></StarRatings>
                        <h3 className="gotham">999 kr</h3>
                        <h4><b>Beskrivelse</b></h4>
                        <p>Using bootstrap's jumbotron with the particle.js background to make the jumbotron semi-transparent.</p>
                    </Col>
                </Row>

                <div className="row justify-content-center">
                    <button type="button" className="btn btn-info btn-circle btn-xl"> <FontAwesomeIcon icon={faCheck} /></button>
                    <Button><FontAwesomeIcon icon={faArrowRight} /> Gå til neste steg</Button>
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