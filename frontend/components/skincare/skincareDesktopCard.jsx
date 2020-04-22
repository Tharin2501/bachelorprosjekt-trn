import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const SkincareDesktopCard = (props) => {



    return (
        <div className="jumbotron" id="jumbo">
            <div className="inner">
                <h1 className="whitney">A Title Here</h1>
                <h3 className="gotham">A Sub Title Here</h3>
                <p>Using bootstrap's jumbotron with the particle.js background to make the jumbotron semi-transparent.</p>
                <p><a className="btn btn-primary btn-lg" role="button">Learn more &raquo;</a></p>
            </div>
        </div>

    );
}


export default SkincareDesktopCard
