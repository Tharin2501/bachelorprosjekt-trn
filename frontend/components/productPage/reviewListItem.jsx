import React from "react";
import StarRatings from 'react-star-ratings';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
const ReviewListItem = ({ reviewdata }) => {
    return (
        <ListGroupItem >
            <ListGroupItemHeading>{reviewdata.tittle}</ListGroupItemHeading>
            <ListGroupItemText>
                {reviewdata.description}
            </ListGroupItemText>
            <StarRatings starDimension="20px" rating={reviewdata.rating} starRatedColor="black" numberOfStars={5} name='rating' alt={`ratingen til annmeldsen`}></StarRatings>
            <p>Skrevet av: {reviewdata.userName}</p>
        </ListGroupItem>
    );
};

export default ReviewListItem;
//
